/* eslint-disable react/react-in-jsx-scope */
import { NavLink } from 'react-router-dom';
import Logo from './Logo_red.png';
import './header.css';

function Header() {
  return (
    <header>
      <img className="logo" src={Logo} alt="Logo Kasa" />
      <nav className="nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'box-links underlined' : 'box-links')}>{window.innerWidth <= 415 ? ('ACCUEIL') : ('Accueil')}</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'box-links underlined' : 'box-links')}>{window.innerWidth <= 415 ? ('À PROPOS') : ('À propos')}</NavLink>
      </nav>
    </header>
  );
}
export default Header;
