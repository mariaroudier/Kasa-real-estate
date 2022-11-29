import './home.css';
import React from 'react';
import Banner from '../../components/Banner/Banner';
import housing from '../../annonces.json';

function Home() {
  return (
    <main className="main-home">
      <Banner />
      <div className="annonces-section">
        {housing.map((house) => (
          <a className="card" href={`/lodgement?id=${house.id}`} key={house.id}>
            <img className="annonce-img" src={house.cover} alt={house.title} key={house.cover} />
            <p className="annonce-title" key={house.title}>{house.title}</p>
          </a>
        ))}
      </div>
    </main>
  );
}

export default Home;
