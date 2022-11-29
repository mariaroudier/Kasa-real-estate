/* eslint-disable react/react-in-jsx-scope */
import BackgroungNature1 from './Background_nature1.png';
import BackgroundNature1Mobile from './Mobile_Background_nature1.png';
import BackgroungNature2 from './Background_nature2.png';
import BackgroundNature2Mobile from './Mobile_Background_nature2.png';
import './banner.css';

function Banner() {
  if (document.location.pathname === '/') {
    return (
      <section className="banner-box banner-mobile">
        <img className="banner-img" src={window.innerWidth <= 415 ? BackgroundNature1Mobile : BackgroungNature1} alt="Nature de l'arrière-plan" />
        <h1 className="banner-titre">Chez vous, partout et ailleurs</h1>
      </section>
    );
  }
  return (
    <div className="banner-box small-margin">
      <img className="banner-img" src={window.innerWidth <= 415 ? BackgroundNature2Mobile : BackgroungNature2} alt="Nature de l'arrière-plan" />
    </div>
  );
}
export default Banner;
