import { useState } from 'react'
import ArrowDown from '../img/ArrowDown.png'
import ArrowUp from '../img/ArrowUp.png'
import './dropdown.css'


function Dropdown({titre, description}) {
      const [open, setOpen] = useState(false)
      const handleClick = () => {
            setOpen(!open)
      }

            return(
                  <div className="container-dropdown" onClick={handleClick}>
                        <div className="dropdown-titre-box">
                              <h1 className="dropdown-titre" >{titre}</h1>
                              {open ? (<img className="arrow arrow-up" src={ArrowUp} alt="Arrow up icon"/>) : <img className="arrow arrow-down" src={ArrowDown} alt="Arrow down icon"/> }
                        </div>
                        {open ? (<p className="dropdown-text" >{description}</p>) : ""}
                  </div>  
            )
}
            

export default Dropdown;