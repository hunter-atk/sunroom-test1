import * as React from 'react';

// components
import { MapContainer } from '../index'

// images
import HeadShot2 from '../../assets/headshot2.jpg'
import ClockIcon from '../../assets/clock-icon.svg'

// styles
import './DocProfileInfo.sass';

export const DocProfileInfo: React.FC = () => {

  return (
    <div className="dpi-main">
      <div className="dpi-bio">
        <h3>Biography</h3>
        <p>Dr. Alex Robinson is an Indonesian heart surgeon specialist. She practices general at Elisabeth Hospital in Semarang... <span>Read more</span></p>
      </div>
      <div className="dpi-location">
        <h3>Location</h3>
        <MapContainer />
      </div>
    </div>
  );
};
