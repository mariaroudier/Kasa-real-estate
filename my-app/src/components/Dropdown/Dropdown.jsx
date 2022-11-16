import ArrowDown from '../img/ArrowDown.png'
import ArrowUp from '../img/ArrowUp.png'

const pointsAbout = [
      {titre: 'Fiabilité',
      description: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
      },
      
      {titre: 'Respect',
      description:'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
      },
      
      {titre: 'Service',
      description: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      },
      
      {titre: 'Sécurité',
      description:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      }
]

function Dropdown() {
      // const Collapsible = () => {
      //       const [open, setOPen] = useState(false);


      // }
      // const arrows = document.queryAllSelector('.arrow')
      const handleClick = event => {
            const descriptions = document.querySelectorAll(".dropdown_text")
            const target = event.target.nextElementSibling
            target.classList.toggle("hide")
            
          
            descriptions.forEach(item => {
              if (item !== target) {
                item.classList.add("hide")
              }

            })
            


            // arrows.forEach(arrow => {
            //       if(arrow.classList.contains('arrow_down')) {
                        
            //       }

            // });
      }



      const point = pointsAbout.map(function(item) {
            return(
                  <div className='container_dropdown' onClick={handleClick}>
                        <div className='dropdown_titre_box'>
                              <h1 className='dropdown_titre' >{item.titre}</h1>
                              <img className='arrow arrow_down' src={ArrowDown} alt="Arrow down icon"/>
                              <img className='arrow arrow_up' src={ArrowUp} alt="Arrow up icon"/>
                        </div>
                        <p className='dropdown_text hide' >{item.description}</p>
                  </div>  
            )
      })
      return(
            <div id='section_dropdowns'>
              {point}
            </div>
      )

            // return (
            //       <>
            //             {pointsAbout.map(point => {
            //                   array.push(
            //                         <div className='container_dropdown' key={point}>
            //                               <div className='dropdown_titre_box'>
                                    
            //                                     <h1 className='dropdown_titre' >{point.titre}</h1>
            //                                     <img className='arrow_up' src={ArrowUp} alt="Arrow up icon" />
            //                               </div>
            //                               <p className='dropdown_text' >{point.text}</p>
            //                         </div>  
            //                   )
            //             })}   
            //       </>
                  
                        
            // )
      
      
            
      
      // return(
      //       <div>{pointsAboutArray}</div>
      // )
      
      // const child = document.getElementsByClassName('container_dropdown')
      //       document.getElementById('section_dropdowns').appendChild(child)

     
      // return(
      //       <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center', marginBottom:'30px'}}>
      //             <div className='container_dropdown'>
      //                   <div className='dropdown_titre_box'>
      //                         <h1 className='dropdown_titre'>Fiabilité</h1>
      //                         <img className='arrow_up' src={ArrowUp} alt="Arrow up icon"/>
      //                   </div>
      //                   <p className='dropdown_text'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
      //             </div>
      //             <div className='container_dropdown'>
      //                   <div className='dropdown_titre_box'>
      //                         <h1 className='dropdown_titre'>Respect</h1>
      //                         <img className='arrow_up' src={ArrowUp} alt="Arrow up icon"/>
      //                   </div>
      //                   <p className='dropdown_text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
      //             </div>
      //             <div className='container_dropdown'>
      //                   <div className='dropdown_titre_box'>
      //                         <h1 className='dropdown_titre'>Service</h1>
      //                         <img className='arrow_up' src={ArrowUp} alt="Arrow up icon"/>
      //                   </div>
      //                   <p className='dropdown_text'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
      //             </div>
      //             <div className='container_dropdown'>
      //                   <div className='dropdown_titre_box'>
      //                         <h1 className='dropdown_titre'>Sécurité</h1>
      //                         <img className='arrow_up' src={ArrowUp} alt="Arrow up icon"/>
      //                   </div>
      //                   <p className='dropdown_text'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
      //             </div>
      //       </div>



      // )


}

export default Dropdown;