import * as React from 'react';

// images
import SwitchIcon from '../../assets/switch-icon.svg'

// styles
import './FindYourDoctor.sass';

export const FindYourDoctor: React.FC = () => {

  return (
    <div className="fyd-main">
      <div className="fyd-horiz-flex-container">
        <h1>Let's find your doctor</h1>
        <img className="fyd-switch-icon" src={SwitchIcon} />
      </div>
    </div>
  );
};
