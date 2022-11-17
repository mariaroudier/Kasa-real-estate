import BackgroungNature1 from './Background_nature1.png' 
import BackgroungNature2 from './Background_nature2.png' 
import './banner.css'   

function Banner() {
      if(document.location.pathname === "/") {
            return (
            <section className="banner-box">
                  <img className="banner-img" src={BackgroungNature1} alt="Background nature"/>
                  <h1 className='banner-titre'>Chez vous, partout et ailleurs</h1>
            </section>
            )
      } else {
            return (
                  <section className="banner-box zero-margin">
                        <img className="banner-img" src={BackgroungNature2} alt="Background nature" />
                  </section>
            )
      }
}
export default Banner;