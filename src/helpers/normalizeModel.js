import uuid from 'uuid'

const normalizeModel = (props, data, events) => {
  var formName = props.formName || uuid.v4();
  return props.model && props.model.map((x, i) => {
    //validate required props
      const result = {
        type: x.type,
        name: x.name,
        label: propToLabel(x.label || x.name),
        placeholder: propToLabel(x.placeholder) || propToLabel(x.label || x.name),
        rules: x.rules || [],
        value: data[x.name] || '',
        onChange: events.onChangeHandler,
        onBlur: events.onBlurHandler,
        errors: [],
        invalid: false,
        key: formName + '_' + i,
        formName
      }
      // Add in custom attributes from model
      for (var attrname in x) { result[attrname] = x[attrname]; }
      return result;
    })
};

const propToLabel = function(val) {
  return val ? val.replace(/([A-Z])/g, ' $1')
  // uppercase the first character
    .replace(/^./, function(str) {
      return str.toUpperCase();
    }) : val;
};

export default normalizeModel;
