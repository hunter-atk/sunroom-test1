import * as React from 'react';

// images
import HeadShot3 from '../../assets/headshot3.jpg'

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
        <div className="dpi-map" />
      </div>
      <div className="dpi-reviews-top">
        <h3>Reviews</h3>
        <p>See all</p>
      </div>
      <div className="dpi-review">
        <img src={HeadShot3} />
        <div>
          <h3>Alexander Hudson</h3>
          <p>"Lorem ipsum dolor sit amet."</p>
        </div>
      </div>
    </div>
  );
};
