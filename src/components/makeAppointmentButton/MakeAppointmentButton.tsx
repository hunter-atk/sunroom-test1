import * as React from 'react';

// components
import { MenuButton } from '../index'

// styles
import './MakeAppointmentButton.sass';

export const MakeAppointmentButton: React.FC = () => {

  return (
    <div className="mab-main">
      <button>
        <span className="mab-text">Make appointment</span>
        <span className="mab-right-arrow-icon" />
      </button>
    </div>
  );
};
