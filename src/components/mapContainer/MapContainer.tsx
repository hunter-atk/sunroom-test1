import * as React from 'react';
import GoogleMapReact from 'google-map-react'
import { useEffect, useRef } from 'react';

// components
import { LocationPin } from '../index'

// styles
import './MapContainer.sass';

export const MapContainer: React.FC = () => {
  const mapRef = useRef(null);

  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, California.',
    lat: 37.42216,
    lng: -122.08427,
  }

  return <div className="map" ref={mapRef}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBSFhOxCDx0by9TeWriuJE4HZhL_kPixtg' }}
      defaultCenter={{
        lat: 37.42216,
        lng: -122.08427
      }}
      defaultZoom={11}
    >
      <LocationPin
        lat={location.lat}
        lng={location.lng}
        text={location.address}
      />
    </GoogleMapReact>
  </div>;
};
