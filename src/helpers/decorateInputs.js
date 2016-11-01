import React from 'react';

const decorateInput = (children, model) => {
  return React.Children.map(children, x => {
    if(!x.props){ return x; }
    if (x.props.frfProperty) {
      var modelProperty = model.filter(f => f.name === x.props.frfProperty)[0];
      if (!modelProperty) {
        throw new Error(`No property on model with name: ${x.frfProperty}!`)
      }
      return React.cloneElement(x, {data: modelProperty, dataVal:modelProperty.value});
    }

    var clonedItems = decorateInput(x.props.children, model);
    return React.cloneElement(x, {children: clonedItems});
  })
};

export default decorateInput;
