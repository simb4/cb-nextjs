import * as React from 'react';
import classNames from 'classnames';
import './index.scss';

const Card = ({children, className, onClick, ...rest}) => {
  return (
    <div {...rest}
         onClick={onClick}
         className={classNames(
           className,
           'card',
           {'clickable': !!onClick}
         )}
    >
      {children}
    </div>
  )
}

export default Card;
