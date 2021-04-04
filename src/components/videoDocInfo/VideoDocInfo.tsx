import * as React from 'react';

// components
import { VideoMenuButton } from '../index'

// styles
import './VideoDocInfo.sass';

export const VideoDocInfo: React.FC = () => {

  return (
    <div className="vdi-main">
      <div className="vdi-doc-info">
        <p>Dermatologist</p>
        <h3>Dr. Haley Lawrence</h3>
        <div className="vdi-status-container">
          <div className="vdi-red-indicator" />
          <span>5.46</span>
        </div>
      </div>
    </div>
  );
};
