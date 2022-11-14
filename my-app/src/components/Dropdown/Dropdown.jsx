import ArrowDown from '../img/ArrowDown.png'
import ArrowUp from '../img/ArrowUp.png'


function Dropdown() {
     
     
     
      return(
            <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center', marginBottom:'30px'}}>
                  <div className='container_dropdown'>
                        <div className='dropdown_titre_box'>
                              <h1 className='dropdown_titre'>Fiabilité</h1>
                              <img className='arrow_up' src={ArrowUp} alt="Arrow up icon"/>
                        </div>
                        <p className='dropdown_text'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                  </div>
                  <div className='container_dropdown'>
                        <div className='dropdown_titre_box'>
                              <h1 className='dropdown_titre'>Respect</h1>
                              <img className='arrow_up' src={ArrowUp} alt="Arrow up icon"/>
                        </div>
                        <p className='dropdown_text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                  </div>
                  <div className='container_dropdown'>
                        <div className='dropdown_titre_box'>
                              <h1 className='dropdown_titre'>Service</h1>
                              <img className='arrow_up' src={ArrowUp} alt="Arrow up icon"/>
                        </div>
                        <p className='dropdown_text'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                  </div>
                  <div className='container_dropdown'>
                        <div className='dropdown_titre_box'>
                              <h1 className='dropdown_titre'>Sécurité</h1>
                              <img className='arrow_up' src={ArrowUp} alt="Arrow up icon"/>
                        </div>
                        <p className='dropdown_text'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                  </div>
            </div>



      )


}

export default Dropdown;