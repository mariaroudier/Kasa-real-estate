import { NavLink } from "react-router-dom";
import Logo from "../img/Logo_red.png"
import './header.css'

function Header() {
    return(
        <header>
            <img className="logo" src={Logo} alt="Logo Kasa"/>
                <nav className="nav">
                    <NavLink to="/" className={ ({isActive}) => (isActive ? "box-links underlined" : "box-links")}>Accueil</NavLink>
                    <NavLink to="/about" className={ ({isActive}) => (isActive ? "box-links underlined" : "box-links")}>À propos</NavLink>
                </nav>
        </header>
    )
}
export default Header;