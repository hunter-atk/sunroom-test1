import * as React from 'react';

import './MainTemplate.sass';

export const MainTemplate: React.FC = ({ children }) => {
  
  return (
    <div className="template-main">
      {children}
    </div>
  );
};
