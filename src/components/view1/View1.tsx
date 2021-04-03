import * as React from 'react';

// components
import { BottomMenu, FindYourDoctor, MainTemplate, MenuAndSearch, UpcomingSchedule } from '../index'

// styles
import './View1.sass';

export const View1: React.FC = () => {

  return (
    <MainTemplate>
      <MenuAndSearch />
      <UpcomingSchedule />
      <FindYourDoctor />
      <BottomMenu />
    </MainTemplate>
  );
};
