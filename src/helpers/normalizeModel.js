import uuid from 'uuid'

const normalizeModel = (props, data, events) => {
  var formName = props.formName || uuid.v4();
  return props.model && props.model.map((x, i) => {
    //validate required props
    let clone = Object.assign({}, x);
    clone.label = propToLabel(x.label || x.name);
    clone.placeholder = propToLabel(x.placeholder) || propToLabel(x.label || x.name);
    clone.rules = x.rules || [];
    clone.value = data[x.name] || '';
    clone.onChange = events.onChangeHandler;
    clone.onBlur = events.onBlurHandler;
    clone.errors = [];
    clone.invalid = false;
    clone.key = formName + '_' + i;
    return clone;
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
