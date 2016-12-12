import React, { PropTypes } from 'react';
import validationRunner from './../helpers/validation/validationRunner';
import normalizeModel from './../helpers/normalizeModel';
import decorateInputs from './../helpers/decorateInputs';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = props.submitHandler;
    this.eventHandler = {onChangeHandler: this.onChangeHandler.bind(this), onBlurHandler: this.onBlurHandler(this)};
  }

  componentWillMount() {
    const fields = normalizeModel(this.props, this.eventHandler);

    this.state = {
      fields,
      formIsValid: true
    };
  }

  componentWillReceiveProps(newProps) {
    const fields = normalizeModel(newProps, this.eventHandler);

    this.state = {
      fields,
      formIsValid: true
    };
  }

  validateField(field, fields) { return validationRunner(field, fields); }

  handleChange(fieldName, value, change) {
    const fields = this.state.fields;
    let field = fields[Object.keys(fields).filter(x => fields[x].name === fieldName)[0]];
    if (!field) {
      return;
    }
    if (change) {
      field.value = value;
    }
    field.errors = this.validateField(field, fields);

    field.invalid = field.errors.length > 0;
    this.setState({
      fields: Object.keys(fields)
        .map(x => fields[x].name === fieldName ? field : fields[x])
        .reduce((x, y) =>{ x[y.name] = y; return x; }, {}),
      formIsValid: Object.keys(fields).some(f => fields[f].errors && fields[f].errors.length > 0)
    });
  }

  generateNameValueModel() {
    const fields = this.state.fields;
    return Object.keys(fields).reduce((x, y) =>{ x[y] = fields[y].value; return x; }, {});
  }

  onChangeHandler(e) {
    return e.target ? this.handleChange(e.target.name, e.target.value, true) : null;
  }

  onBlurHandler(e) {
    return e.target ? this.handleChange(e.target.name, e.target.value) : null;
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.errors = [];
    const fields = this.state.fields;
    let newFieldsState = Object.keys(fields).map(x => {
      fields[x].errors = this.validateField(fields[x], this.state.fields);
      this.errors = this.errors.concat(fields[x].errors);
      return fields[x];
    });

    this.setState({fields: newFieldsState, formIsValid: this.errors.length <= 0, errors: this.errors});
    if (this.errors.length <= 0) {
      this.submitHandler(this.generateNameValueModel());
    }
  }

  render() {
    // I have moved this down to render, as it is necessary when using "connect"ed inputs from redux
    // also superficial evidence is that it does not affect the number of time decorate is called
    this.newChildren = decorateInputs(this.props.children, this.state.fields);
    return (<form onSubmit={this.onSubmitHandler.bind(this)} >
      {this.newChildren}
    </form>);
  }
}


Form.propTypes = {
  children: PropTypes.array,
  submitHandler: PropTypes.func
};

export default Form;
