import validationRunner from './../helpers/validation/validationRunner';
import normalizeModel from './../helpers/normalizeModel';

const Form2 = function() {

  const handleChange = (fieldName, value, change, fields) => {
    let field = {...fields[fieldName]};
    if (!field) {
      return;
    }
    if (change) {
      field.dirty = field.value !== value;
      field.value = value;
    }
    field.errors = validationRunner(field, fields);

    field.invalid = field.errors.length > 0;
    return {
      fields: Object.keys(fields)
        .map(x => x === fieldName ? field : fields[x])
        .reduce((x, y) =>{ x[y.name] = y; return x; }, {}),
      formIsValid: Object.keys(fields).some(f => fields[f].errors && fields[f].errors.length > 0)
    };
  };

  const generateNameValueModel = (fields) => {
    //this is for cases where you have an entity with an id/display pair
    return Object.keys(fields).reduce((x, y) =>{ x[y] = fields[y].value.id || fields[y].value; return x; }, {});
  };

  const onChangeHandler = (fields) => {
    return (e) => e.target ? handleChange(e.target.name, e.target.value, true, fields) : null;
  };

  const onBlurHandler = (fields) => {
    return (e) => e.target ? handleChange(e.target.name, e.target.value, false, fields) : null;
  };

  const validateForm = (fields) =>{
    let errors = [];
    let newFieldsState = Object.keys(fields).map(x => {
      fields[x].errors = validationRunner(fields[x], fields);
      errors = errors.concat(fields[x].errors);
      return {...fields[x]};
    }).reduce((x, y) =>{ x[y.name] = y; return x; }, {});

    return {fields: newFieldsState, formIsValid: errors.length <= 0, errors: errors};
  };

  const buildModel = (formName, model, events) => {
    return normalizeModel(formName, model, events);
  };

  const trySubmitForm = (fields, action) =>{
    const result = validateForm(fields);
    if(result.formIsValid){
      action(generateNameValueModel(result.fields))
    }
    return result;
  };

  return {
    trySubmitForm,
    buildModel,
    validateForm,
    generateNameValueModel,
    onChangeHandler
  }
}();

export default Form2;
