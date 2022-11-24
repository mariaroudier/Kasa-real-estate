import { useState } from 'react'
import ArrowDown from '../img/ArrowDown.png'
import ArrowUp from '../img/ArrowUp.png'
import './dropdown.css'


function Dropdown({titre, description,isSmall}) {
      const [open, setOpen] = useState(false)
      const handleClick = () => {
            setOpen(!open)
      }

      return(
            <div className={ isSmall === true ? "container-dropdown small-dropdown" : "container-dropdown"} onClick={handleClick}>
                  <div className={ isSmall === true ? "dropdown-titre-box small-dropdown-titre-box" : "dropdown-titre-box"}>
                        <h1 className={ isSmall === true ? "dropdown-titre small-titre" : "dropdown-titre"} >{titre}</h1>
                        {open ? (<img className="arrow arrow-up" src={ArrowUp} alt="Arrow up icon"/>) : <img className="arrow arrow-down" src={ArrowDown} alt="Arrow down icon"/> }
                  </div>
                        {open ? (<div className={ isSmall === true ? "dropdown-text small-text" : "dropdown-text"}>{description}</div>) : ""}
            </div>  
      )
      
}
            

export default Dropdown;