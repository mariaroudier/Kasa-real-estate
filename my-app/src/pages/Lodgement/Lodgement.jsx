/* eslint-disable no-else-return */
/* eslint-disable indent */
/* eslint-disable react/react-in-jsx-scope */
import './lodgement.css';
import housing from '../../annonces.json';
import Slideshow from '../../components/Slideshow/Slideshow';
import Dropdown from '../../components/Dropdown/Dropdown';
import Tag from '../../components/Tag/Tag';
import Star from '../../components/Star/Star';

function Lodgement() {
  const searchParams = new URLSearchParams(document.location.search);
  const id = searchParams.get('id');
  let house;

  housing.forEach((el) => {
    if (el.id === id) {
      house = el;
    }
  });
  if (house) {
    return (
      <main className="main-lodgement">
        <Slideshow pictures={house.pictures} title={house.title} />
        <section className="info">
          <div className="info-left-side">
            <h1 className="info-title">{house.title}</h1>
            <p className="info-location">{house.location}</p>
            <div className="tags">
              {house.tags.map((tag) => <Tag textTag={tag} key={tag} />)}
            </div>
          </div>
          <div className="info-right-side">
            <div className="owner-box">
              <div className="box-owner-name">
                <p className="owner-name">{house.host.name}</p>
              </div>
              <img className="owner-photo" src={house.host.picture} alt="Propriétaire" />
            </div>
            <Star houseRating={house.rating} />
          </div>
        </section>

        <div className="dropdowns">
          <Dropdown titre="Description" description={house.description} isSmall />
          <Dropdown
            titre="Equipments"
            description={
              house.equipments.map((util) => <p className="util" key={util}>{util}</p>)
            }
            isSmall
          />
        </div>
      </main>
    );
  } else {
      window.location.pathname = '/notfound';
  }
}

export default Lodgement;
