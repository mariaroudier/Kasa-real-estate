/* eslint-disable react/react-in-jsx-scope */
import Logo from './Logo_white.png';
import './footer.css';

function Footer() {
  if (window.location.pathname == '/' || window.location.pathname == '/about' || window.location.pathname == '/lodgement' ) {
    return (
      <footer>
        <img className="logo-white" src={Logo} alt="Logo Kasa" />
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  } else {
    return ""
  }
}
export default Footer;
