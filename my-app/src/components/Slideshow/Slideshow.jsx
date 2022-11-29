/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import chevronLeft from './arrow-left.png';
import chevronRight from './arrow-right.png';
import './slideshow.css';

function Slideshow({ pictures, title }) {
  const [index, setIndex] = useState(0);
  const numberOfPhotos = pictures.length;

  return (
    <div className="slideshow">
      { numberOfPhotos > 1
        ? (
          <>
            <img className="chevron-left" src={chevronLeft} alt="Icône chevron gauche" aria-label="Photo précédente" tabIndex={0} onKeyPress={() => setIndex(index - 1)} onClick={() => setIndex(index - 1)} />
            <img className="chevron-right" src={chevronRight} alt="Icône chevron droite" aria-label="Photo suivante" tabIndex={0} onKeyPress={() => setIndex(index + 1)} onClick={() => setIndex(index + 1)} />
          </>
        )
        : '' }

      {index < numberOfPhotos && index >= 0
        ? (
          <>
            <img className="slideshow-img" src={pictures[index]} alt={title} />
            { numberOfPhotos > 1 ? <span className="slideshow-text" key={numberOfPhotos}>{`${index + 1}/${numberOfPhotos}`}</span> : ''}
          </>
        ) : setIndex(index - numberOfPhotos)
                  && (
                  <>
                    <img className="slideshow-img" src={pictures[index]} alt={title} />
                    <span className="slideshow-text" key={numberOfPhotos}>{`${index + 1}/${pictures.length}`}</span>
                  </>
                  ) }

      {index < 0 ? setIndex(index + numberOfPhotos)
                  && (
                  <>
                    <img className="slideshow-img" src={pictures[index + numberOfPhotos]} alt={title} />
                    <span className="slideshow-text" key={numberOfPhotos}>{`${index + numberOfPhotos + 1}/${numberOfPhotos}`}</span>
                  </>
                  )
        : '' }
    </div>
  );
}

export default Slideshow;
