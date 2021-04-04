import * as React from 'react';
import classNames from 'classnames';

// styles
import './VideoMenuButton.sass';

interface IProps {
  iconSource: String;
  active?: Boolean;
}

export const VideoMenuButton: React.FC<IProps> = ({ iconSource, active = false }) => {

  return (
    <div className={classNames("vmb-main", active ? "active" : null)}>
      <img src={active ? require(`../../assets/blue-${iconSource}`).default : require(`../../assets/${iconSource}`).default} />
    </div>
  );
};
