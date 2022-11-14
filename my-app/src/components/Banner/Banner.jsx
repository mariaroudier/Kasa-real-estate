import BackgroungNature1 from './Background_nature1.png' 
import BackgroungNature2 from './Background_nature2.png'    

function Banner() {
      if(document.location.pathname === "/") {
            return (
            <section style={{display: 'flex',position:'relative',marginBottom:'99px'}}>
                  <img src={BackgroungNature1} alt="Background nature" style={{width: '100%',borderRadius:'25px',filter: 'brightness(0.7)',}} />
                  <h1 style={{position: 'absolute',margin:'0',fontSize:'40px',color:'white',top:'50%',left:'50%',transform:'translate(-50%, -50%)',textAlign: 'center',}}>Chez vous, partout et ailleurs</h1>
            </section>
            )
      } else {
            return (
                  <section style={{display: 'flex',position:'relative'}}>
                        <img src={BackgroungNature2} alt="Background nature" style={{width: '100%',borderRadius:'25px',filter: 'brightness(0.7)',}} />
                  </section>
            )
      }
}
export default Banner;