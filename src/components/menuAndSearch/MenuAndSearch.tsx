import * as React from 'react';

// images
import LocationIcon from '../../assets/location-icon.svg'
import SearchIcon from '../../assets/search-icon.svg'

// styles
import './MenuAndSearch.sass';

export const MenuAndSearch: React.FC = () => {

  return (
    <div className="ms-main">
      <div className="ms-horiz-flex-container">
        <div className="ms-menu-button" />
        <div>
          <p>Current Location</p>
          <div className="ms-location-container">
            <img className="ms-location-icon" src={LocationIcon} />
            <span>Semarang, INA</span>
          </div>
        </div>
        <div className="ms-headshot" />
      </div>
      <div className="ms-search-bar">
        <img className="ms-search-icon" src={SearchIcon} />
        <input type="text" placeholder="Search a doctor or health issue"></input>
      </div>
    </div>
  );
};
