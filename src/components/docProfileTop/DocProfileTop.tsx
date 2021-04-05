import * as React from 'react';

// styles
import './DocProfileTop.sass';

export const DocProfileTop: React.FC = () => {

  return (
    <div className="dpt-main">
      <div className="dpt-horiz-flex-container">
        <div className="dpt-back-button" />
        <div className="dpt-contact-button" />
      </div>
      <div className="dpt-doc-info">
        <div className="dpt-doc-image-container">
          <div className="dpt-doc-image-shadow" />
          <div className="dpt-doc-image" />
        </div>
        <div className="dpt-doc-stats">
          <div className="dpt-info-text-container">
            <h3>Dr. Alex Robinson</h3>
            <p>Heart surgeon specialist</p>
          </div>
          <div className="dpt-stat-container">
            <div className="dpt-stat-icon-ratings" />
            <div>
              <p className="dpt-stat-text-line1">Rating</p>
              <p className="dpt-stat-text-line2">4.5 out of 5</p>
            </div>
          </div>
          <div className="dpt-stat-container">
            <div className="dpt-stat-icon-patients" />
            <div>
              <p className="dpt-stat-text-line1">Patients</p>
              <p className="dpt-stat-text-line2">1000+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
