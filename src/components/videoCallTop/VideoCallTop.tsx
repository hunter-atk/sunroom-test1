import * as React from 'react';

// styles
import './VideoCallTop.sass';

export const VideoCallTop: React.FC = () => {

  return (
    <div className="vct-horiz-flex-container">
      <div className="vct-back-button" />
      <div className="vct-reverse-video" />
    </div>
  );
};
