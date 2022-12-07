

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable */
import { useState } from 'react';
import ArrowDown from './ArrowDown.png';
import ArrowUp from './ArrowUp.png';
import './dropdown.css';

function Dropdown({ titre, description, isSmall }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleKeyPress = () => {
    handleClick()
  }

  return (
    <div className={isSmall === true ? 'container-dropdown small-dropdown' : 'container-dropdown'} onClick={handleClick} onKeyPress={(e) => handleKeyPress(e)} aria-label={open ? 'Fermer' : 'Ouvrir'} aria-expanded={open ? 'true' : 'false'} tabIndex={0}>
      <div className={isSmall === true ? 'dropdown-titre-box small-dropdown-titre-box' : 'dropdown-titre-box'}>
        <h1 className={isSmall === true ? 'dropdown-titre small-titre' : 'dropdown-titre'}>{titre}</h1>
        {open ? (<img className="arrow arrow-up" src={ArrowUp} alt="Icône flèche vers le haut" />) : <img className="arrow arrow-down" src={ArrowDown} alt="Icône flèche vers le bas" /> }
      </div>
      {open ? (<div className={isSmall === true ? 'dropdown-text small-text' : 'dropdown-text'}>{description}</div>) : ''}
    </div>
  );
}

export default Dropdown;
