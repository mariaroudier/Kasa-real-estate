import { useState } from 'react'
import chevronLeft from './arrow-left.png'
import chevronRight from './arrow-right.png'
import './slideshow.css'


function Slideshow({pictures,title}) {

      const [index, setIndex] = useState(0)
      const numberOfPhotos = pictures.length

      return  (
            <div className='slideshow'>  
                  { numberOfPhotos > 1 ?
                  (<>
                        <img className='chevron-left'src={chevronLeft} alt='chevron left icon' onClick={() => setIndex(index - 1)}></img>
                        <img className='chevron-right'src={chevronRight} alt='chevron right icon' onClick={() => setIndex(index + 1)}></img>
                  </>) 
                  : "" }
                  
                  {index < numberOfPhotos && index >= 0 ? 
                  (<><img className='slideshow-img'src={pictures[index]} alt={title}></img>
                        { numberOfPhotos > 1 ? <span className='slideshow-text' key={numberOfPhotos}>{index + 1 + "/" + numberOfPhotos}</span> : ""}
                  </>) : setIndex(index - numberOfPhotos) && 
                  (<>
                        <img className='slideshow-img'src={pictures[index]} alt={title}></img>
                        <span className='slideshow-text' key={numberOfPhotos}>{index + 1 + "/" + pictures.length}</span>
                  </>) }

                  {index < 0 ? setIndex(index + numberOfPhotos) &&
                  (<><img className='slideshow-img'src={pictures[index + numberOfPhotos]} alt={title}></img>
                  <span className='slideshow-text' key={numberOfPhotos}>{index + numberOfPhotos + 1 + "/" + numberOfPhotos}</span></>)
                  : "" }
            </div>
      )
}
    
export default Slideshow;