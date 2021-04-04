import * as React from 'react';

// components
import { MainTemplate, VideoCallMenu, VideoCallTop, VideoDocInfo, VideoDocVolumeSlider } from '../index'

// styles
// import './View3.sass';

export const View3: React.FC = () => {
  
  return (
    <MainTemplate portrait={true}>
      <VideoCallTop />
      <VideoDocVolumeSlider />
      <VideoDocInfo />
      <VideoCallMenu />
    </MainTemplate>
  );
};
