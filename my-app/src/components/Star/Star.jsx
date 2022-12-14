/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import starRed from './star_red.png';
import starWhite from './star_white.png';
import './star.css';

function Star({ houseRating }) {
  let i = 0;
  const maxRating = 5;
  const rating = [];

  while (i < maxRating) {
    i++;
    rating.push(i);
  }
  return (
    <div className="rating">
      {rating.map((rate) => (
        rate <= Number(houseRating) ? (<img className="star" src={starRed} alt="√Čvaluation" key={rate} />)
          : (<img className="star" src={starWhite} alt="√Čvaluation" key={rate} />)
      ))}
    </div>
  );
}

export default Star;
