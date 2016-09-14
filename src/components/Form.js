import React from 'react'
import validationRunner from './../helpers/validation/validationRunner';
import normalizeModel from './../helpers/normalizeModel';
import decorateInputs from './../helpers/decorateInputs'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = props.submitHandler;

    const eventHandler = {onChangeHandler: this.onChangeHandler.bind(this), onBlurHandler: this.onBlurHandler(this)};
    const fields = normalizeModel(props.model,{}, eventHandler);

    this.state = {
      fields,
      formIsValid: true
    };
    this.newChildren = decorateInputs(this.props.children, this.state.fields);

  }

  componentWillUpdate(nextProps, nextState){
    this.newChildren = decorateInputs(nextProps.children, nextState.fields);
  }

  validateField(field, fields) { return validationRunner(field, fields); }

  handleChange(fieldName, value, change) {
    let field = this.state.fields.filter(x => x.name === fieldName)[0];
    if (!field) {
      return;
    }
    if (change) {
      field.value = value;
    }
    field.errors = this.validateField(field, this.state.fields);

    field.invalid = field.errors.length > 0;
    this.setState({
      fields: this.state.fields.map(x => x.name === fieldName ? field : x),
      formIsValid: this.state.fields.some(f => f.errors && f.errors.length > 0)
    })
  }

  generateNameValueModel() {
    return this.state.fields.reduce((x, y) =>{ x[y.name] = y.value; return x; }, {});
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
      x.errors = validationRunner(x, this.state.fields);
      this.errors.concat(x.errors);
      return x;
    });

    this.setState({fields:newFieldsState , formIsValid: this.errors.length <= 0, errors: this.errors});
    if(this.errors.length <= 0){
    this.submitHandler(this.generateNameValueModel());
      // alert(JSON.stringify(this.generateNameValueModel()));
  }

  render() {
    return (<form onSubmit={this.onSubmitHandler.bind(this)} >
      {this.newChildren}
    </form>)
  }
}

export default Form;
