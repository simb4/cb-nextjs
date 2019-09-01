import React from 'react';

export const eraseKey = (o, key) => {
  let newO = Object.assign({}, o);
  delete newO[key];
  return newO;
}

export const propsToChildren = (children, props) => {
  return React.Children.map(children, child =>
    React.cloneElement(child, props)
  );
}