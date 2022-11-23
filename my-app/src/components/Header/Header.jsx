import { NavLink } from "react-router-dom";
import Logo from "../img/Logo_red.png"
import './header.css'

function Header() {

    // function toChooseStyle(page) {
    //     switch (page) {
    //         case "home":
    //             return (
    //                 <ul className="nav">
    //                     <li className="box-links"><a className="links underlined" href="/">Accueil</a></li>
    //                     <li className="box-links"><a className="links" href="/about">A Propos</a></li>
    //                 </ul>
    //             )
            
    //         case "about" :
    //             return (
    //                 <ul className="nav">
    //                     <li className="box-links"><a className="links" href="/">Accueil</a></li>
    //                     <li className="box-links"><a className="links underlined" href="/about">A Propos</a></li>
    //                 </ul>
    //             )
            
    //         default :
    //             return (
    //                 <ul className="nav">
    //                     <li className="box-links"><a className="links" href="/">Accueil</a></li>
    //                     <li className="box-links"><a className="links" href="/about">A Propos</a></li>
    //                 </ul>
    //             )
    //     }
    // }

    
        return(
            <header>
                <img className="logo" src={Logo} alt="Logo Kasa"/>
                    <div>
                        <nav>
                            <NavLink to="/" className={ ({isActive}) => (isActive ? "underlined" : "")}>Accueil</NavLink>
                            <NavLink to="/about" className={ ({isActive}) => (isActive ? "underlined" : "")}>À propos</NavLink>
                        </nav>
                    </div>
            </header>
        )
    
    
}
export default Header;