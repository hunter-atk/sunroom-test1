import * as React from 'react';

// components
import { DocType, Stars } from '../index'

// images
import HeadShot from '../../assets/headshot.jpg'
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
      <div className="fyd-doctypes-wrapper">
        <DocType type="Heart surgeon" iconSource="heart-icon.svg" active={true} />
        <DocType type="Psychologist" iconSource="pill-icon.svg" />
        <DocType type="Orthodontist" iconSource="tooth-icon.svg" />
        <div className="fyd-flex-padding" />
      </div>
      <div className="fyd-doc-info">
        <img src={HeadShot} />
        <div>
          <h3>Dr. Anna Baker</h3>
          <p>Heart surgeon</p>
          <div className="fyd-ratings-container">
              <Stars wholeNum={4} halfNum={1} />
          </div>
        </div>
      </div>
    </div>
  );
};
