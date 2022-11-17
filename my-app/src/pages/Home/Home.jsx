
import './home.css'
import Banner from '../../components/Banner/Banner'
import LocationBox from '../../components/LocationBox/LocationBox'
// import Housing from '../annonces.json'

async function getLodgements() {
  // const response = await fetch("../../annonces.json")
  // const data = await response.json
  // return data
}


async function init() {
  const annonces = await getLodgements();


  const displayData = () => {
    const annoncesSection = document.querySelector(".annoncesSection")
    annonces.forEach(annonce => {
      
    });
  }
}





function Home() {
  return (
      <main className="main-home">
        <Banner/>
        <div className="annoncesSection">

        </div>

      </main>
  );
}

export default Home;