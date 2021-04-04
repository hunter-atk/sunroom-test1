import * as React from 'react';

// images
import LocationIcon from '../../assets/location-icon.svg'

// styles
import './LocationPin.sass';

interface IProps {
  lat: Number;
  lng: Number;
  text: string;
}

export const LocationPin: React.FC<IProps> = ({ lat, lng, text }) => {

  return <div className="pin">
    <img src={LocationIcon} className="pin-icon" />
  </div>;
};
