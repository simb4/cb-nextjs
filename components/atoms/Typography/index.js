import * as React from 'react';
import {mapPropsToAttributes} from 'utils/typography';
import {eraseFromObject} from 'utils/serialization';

const TypographyVariants = {
  'h1': 'h1',
  'h2': 'h2',
  'h3': 'h3',
  'h4': 'h4',
  'h1light': 'h3',
  'h2light': 'h2',
  'h3reg': 'h4',
  'body': 'p',
  'bodybold': 'span',
  'subbody': 'span',
  'subbodybold': 'span',
  'caption': 'span',
  'captionbold': 'span'
}

const Typography = (props) => {
  return React.createElement(
    props.element ? props.element : TypographyVariants[props.variant] || TypographyVariants.body,
    {
      ...eraseFromObject(props, 'variant', 'classNames', 'element', 'covered'),
      ...mapPropsToAttributes(props, 'typography', {
        [`typography__variant-${props.variant}`]: props.variant,
        ...(!!props.color ? {
          [`color__${props.color}`]: props.color
        } : {}),
      }),
    },
    props.children);
}

export default Typography;
