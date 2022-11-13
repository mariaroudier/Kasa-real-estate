
import { Routes, Route, Link } from "react-router-dom";
import BackgroungNature from './/img/Background_nature.png'

function Home() {
  return (
      <main style={{paddingLeft:'100px',paddingRight:'100px',
      }}>
        <section style={{display: 'flex',position:'relative',marginBottom:'99px'

        }}>
          <img src={BackgroungNature} alt="Background nature" style={{width: '100%',borderRadius:'25px',filter: 'brightness(0.7)',
          }} />
          <h1 style={{position: 'absolute',margin:'0',fontSize:'40px',color:'white',top:'50%',left:'50%',transform:'translate(-50%, -50%)',textAlign: 'center',
          }}>Chez vous, partout et ailleurs</h1>
          
        </section>
      </main>
  );
}

export default Home;