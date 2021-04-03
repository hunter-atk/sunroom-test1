import * as React from 'react';
import classNames from 'classnames';

// styles
import './DocType.sass';

interface IProps {
  iconSource: String;
  type: String;
  active?: Boolean;
}

export const DocType: React.FC<IProps> = ({ iconSource, type, active = false }) => {

  return (
    <div className={classNames("dt-horiz-flex-container", active ? "active" : null)}>
      <div className="dt-img-container">
        <img src={require(`../../assets/${iconSource}`).default} />
      </div>
      <span>{type}</span>
    </div>
  );
};
