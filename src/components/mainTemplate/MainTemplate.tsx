import classNames from 'classnames';
import * as React from 'react';

import './MainTemplate.sass';

interface IProps {
  portrait?: Boolean;
}

export const MainTemplate: React.FC<IProps> = ({ children, portrait = false }) => {

  const classes = classNames({
    'template-main': true,
    'template-portrait': portrait
  });
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};
