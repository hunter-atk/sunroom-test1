import * as React from 'react';
import classNames from 'classnames';

// styles
import './MenuButton.sass';

interface IProps {
  iconSource: String;
  active?: Boolean;
}

export const MenuButton: React.FC<IProps> = ({ iconSource, active = false }) => {

  return (
    <div className={classNames("mb-main", active ? "active" : null)}>
      <img src={active ? require(`../../assets/blue-${iconSource}`).default : require(`../../assets/${iconSource}`).default} />
    </div>
  );
};
