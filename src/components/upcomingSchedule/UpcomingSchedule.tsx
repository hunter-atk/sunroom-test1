import * as React from 'react';

// images
import HeadShot2 from '../../assets/headshot2.jpg'
import ClockIcon from '../../assets/clock-icon.svg'

// styles
import './UpcomingSchedule.sass';

export const UpcomingSchedule: React.FC = () => {

  return (
    <div className="us-main">
      <div className="us-horiz-flex-container">
        <h1>Upcoming Schedule</h1>
        <p>See all</p>
      </div>
      <div className="us-schedule-container">
        <div className="us-doc-info-container">
          <div className="us-doc-info">
            <img src={HeadShot2} />
            <div>
              <h3>Dr. Haley Lawrence</h3>
              <p>Dermatologist</p>
            </div>
          </div>
          <div className="us-camera-icon" />
        </div>
        <div className="us-date-container">
          <img src={ClockIcon}/>
          <span>Sun, Jan 19, 08.00am - 10.00am</span>
        </div>
      </div>
      <div className="us-schedule-container-pop1" />
      <div className="us-schedule-container-pop2" />
    </div>
  );
};
