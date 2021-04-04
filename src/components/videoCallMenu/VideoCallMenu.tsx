import * as React from 'react';

// components
import { VideoMenuButton } from '../index'

// styles
import './VideoCallMenu.sass';

export const VideoCallMenu: React.FC = () => {

  return (
    <div className="vcm-main">
        <VideoMenuButton iconSource="video-camera-white.svg" />
        <VideoMenuButton iconSource="microphone-icon.svg" />
        <div className="vcm-call-button" />
        <VideoMenuButton iconSource="messenger-icon.svg" />
        <VideoMenuButton iconSource="menu-dots.svg" />
    </div>
  );
};
