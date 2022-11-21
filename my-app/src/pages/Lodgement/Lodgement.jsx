import { useState } from 'react'
import './lodgement.css'
import housing from '../../annonces.json'
import Slideshow from '../../components/Slideshow/Slideshow.jsx'


function Lodgement() {
    const searchParams = new URLSearchParams(document.location.search)
    const id = searchParams.get("id")
    
    // if (house.id === id)

      return (
                  <main className='main-lodgement'>
                      <Slideshow/>
                      
                      
                      <div>         
                           
                      </div>
                          
                    



                  </main>
      )
}
    
export default Lodgement;