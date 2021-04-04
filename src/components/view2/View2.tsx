import * as React from 'react';

// components
import { DocProfileInfo, DocProfileTop, MainTemplate } from '../index'

// styles
// import './View2.sass';

export const View2: React.FC = () => {
  
  return (
    <MainTemplate>
      <DocProfileTop />
      <DocProfileInfo />
    </MainTemplate>
  );
};
