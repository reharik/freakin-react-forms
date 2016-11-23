import React from 'react'
import validationRunner from './../helpers/validation/validationRunner';
import normalizeModel from './../helpers/normalizeModel';
import decorateInputs from './../helpers/decorateInputs'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = props.submitHandler;

    const eventHandler = {onChangeHandler: this.onChangeHandler.bind(this), onBlurHandler: this.onBlurHandler(this)};
    const fields = normalizeModel(props, {}, eventHandler);

    this.state = {
      fields,
      formIsValid: true
    };
  }

  validateField(field, fields) { return validationRunner(field, fields); }

  handleChange(fieldName, value, change) {
    let field = this.state.fields.filter(x => x.name === fieldName)[0];
    if (!field) {
      return;
    }
    if (change) {
      field.dirty = field.value !== value;
      field.value = value;
    }
    field.errors = this.validateField(field, this.state.fields);

    field.invalid = field.errors.length > 0;
    this.setState({
      fields: this.state.fields.map(x => x.name === fieldName ? field : x),
      formIsValid: this.state.fields.some(f => f.errors && f.errors.length > 0)
    });
  }

  generateNameValueModel() {
    return this.state.fields.reduce((x, y) => { x[y.name] = y.value; return x; }, {});
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
    var newFieldsState = this.state.fields.map(x => {
      x.errors = this.validateField(x, this.state.fields);
      this.errors = this.errors.concat(x.errors);
      return x;
    })
    .reduce((prev, next) => {
      prev[next.name] = next;
      return prev;
    }, {});

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
    </form>)
  }
}

export default Form;
