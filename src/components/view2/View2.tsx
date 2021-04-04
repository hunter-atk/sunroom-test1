import * as React from 'react';

// components
import { DocProfileInfo, DocProfileTop, MainTemplate, MakeAppointmentButton } from '../index'

// styles
// import './View2.sass';

export const View2: React.FC = () => {
  
  return (
    <MainTemplate>
      <DocProfileTop />
      <DocProfileInfo />
      <MakeAppointmentButton />
    </MainTemplate>
  );
};
