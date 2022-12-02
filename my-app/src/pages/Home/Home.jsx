import './home.css';
import React from 'react';
import Banner from '../../components/Banner/Banner';
import housing from '../../annonces.json';
import {useNavigate} from 'react-router-dom';


function Home() {
  let navigate = useNavigate()

  return (
    <main className="main-home">
      <Banner />
      <div className="annonces-section">
        {housing.map((house) => (
          <div className="card" onClick={() => navigate(`/lodgement?id=${house.id}`)} key={house.id}>
            <img className="annonce-img" src={house.cover} alt={house.title} key={house.cover} />
            <p className="annonce-title" key={house.title}>{house.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
