import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

// images
import VolumeIcon from "../../assets/volume-icon.svg";

// styles
import './VideoDocVolumeSlider.sass';

export const VideoDocVolumeSlider: React.FC = () => {
  const [value, setValue] = useState("30")

  useEffect(() => {
    if(value) return;
  }, [value])
  


  return (
    <div className="vdvs-main">
      <div className="vdvs-slider-container">
        <img className="vdvs-volume-icon" src={VolumeIcon} />
        <input style={{background: `linear-gradient(to right, #0958e8 0%, #0958e8 ${value}%, #e3edff ${value}%, #e3edff 100%)`}} onChange={e => setValue(e.target.value)} min="0" type="range" value={value} className="vdvs-slider" />
      </div>
    </div>
  );
};
