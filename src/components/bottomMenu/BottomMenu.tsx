import * as React from 'react';

// components
import { MenuButton } from '../index'

// styles
import './BottomMenu.sass';

export const BottomMenu: React.FC = () => {

  return (
    <div className="bc-main">
      <MenuButton iconSource="home-icon.svg" active={true} />
      <MenuButton iconSource="file-icon.svg" />
      <MenuButton iconSource="calendar-icon.svg" />
      <MenuButton iconSource="user-icon.svg" />
    </div>
  );
};
