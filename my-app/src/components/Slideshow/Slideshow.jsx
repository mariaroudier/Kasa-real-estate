import { useState } from 'react'
import housing from '../../annonces.json'
import chevronLeft from './arrow-left.png'
import chevronRight from './arrow-right.png'
import './slideshow.css'


function Slideshow() {
    const searchParams = new URLSearchParams(document.location.search)
    const id = searchParams.get("id")
    const [index, setIndex] = useState(0)


      return  (
            housing.map(house => {
                  const numberOfPhotos = house.pictures.length
                  if (house.id === id) {
                        return (
                              <div className='slideshow' style={{backgroundColor:'red'}}>  
                                    <img className='chevron-left'src={chevronLeft} alt='chevron left icon' onClick={() => setIndex(index - 1)}></img>
                                    <img className='chevron-right'src={chevronRight} alt='chevron right icon' onClick={() => setIndex(index + 1)}></img>
      
                                    {index < numberOfPhotos && index >= 0 ? 
                                    (<><img className='slideshow-img'src={house.pictures[index]} alt={house.title} key={house.picture}></img>
                                    <span className='slideshow-text' key={numberOfPhotos}>{index + 1 + "/" + numberOfPhotos}</span></>)
                                    : setIndex(index - numberOfPhotos) && (
     
                                                <>
                                                      <img className='slideshow-img'src={house.pictures[index]} alt={house.title} key={house.picture}></img>
                                                      <span className='slideshow-text' key={numberOfPhotos}>{index + 1 + "/" + house.pictures.length}</span>
                                                </>
                                    )} {console.log(index)}

                                    {index < 0 ? setIndex(index + numberOfPhotos) &&
                                    (<><img className='slideshow-img'src={house.pictures[index + numberOfPhotos]} alt={house.title} key={house.picture}></img>
                                    <span className='slideshow-text' key={numberOfPhotos}>{index + numberOfPhotos + 1 + "/" + numberOfPhotos}</span></>)
                                          : ""
                                    }


                              </div>
                        
                        )
                        
                  }else{
                        return ""
                  }
            }) 
      )
            

                          
                  
      
}
    
export default Slideshow;