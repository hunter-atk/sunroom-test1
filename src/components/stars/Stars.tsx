import * as React from 'react';

// images
import WholeStar from '../../assets/star-whole-icon.svg'
import HalfStar from '../../assets/star-half-icon.svg'
import EmptyStar from '../../assets/star-empty-icon.svg'

// styles
import './Stars.sass';

interface IProps {
  wholeNum?: Number;
  halfNum?: Number;
  emptyNum?: Number;
}

export const Stars: React.FC<IProps> = ({ wholeNum = 5, halfNum = 0, emptyNum = 0 }) => {
  let stars = []

  for (let i = 0; i < wholeNum; i++) {
    stars.push(<img className="stars-star" key={i} src={WholeStar} />)
  }

  for (let i = 5; i < Number(halfNum) + 5; i++) {
    stars.push(<img className="stars-star" key={i} src={HalfStar} />)
  }

  for (let i = 10; i < Number(emptyNum) + 10; i++) {
    stars.push(<img className="stars-star" key={i} src={EmptyStar} />)
  }


  return (
    <div className="stars-main">
    <div className="stars-container">
      {stars}
    </div>
    <div className="stars-text">
      <span className="stars-review-numbers">{Number(wholeNum) + (Number(halfNum)/2)}</span> 
      <span>&nbsp;|&nbsp;</span>
      <span className="stars-review-numbers">120 &nbsp;</span>
      <span>Reviews</span>
    </div>
    </div>
  );
};
