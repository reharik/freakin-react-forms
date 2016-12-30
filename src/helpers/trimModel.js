
const trimModel = (children, model) => {
  let newModel = {};
  React.Children.forEach(children, x => {
    if (!x.props) { return x; }
    var propertyName = selectn('frfProperty.name', x.props);
    const property = model[propertyName];
    if (property) {
      if (typeof property !== 'object') {
        throw new Error(`No property on model with name: ${x.frfProperty}!`);
      }
      return newModel[propertyName] = property;
    }
    trimModel(x.props.children, model);
  });
  return newModel;
};

export default trimModel;
