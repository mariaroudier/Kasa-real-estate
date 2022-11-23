import housing from '../../annonces.json'
import './tag.css'

function Tag({textTag}) {
      // const searchParams = new URLSearchParams(document.location.search)
      // const id = searchParams.get("id")

      // return (housing.map(house => {
      //       if (house.id === id) {
      //             return (
      //                   <div className='tags'>
      //                         {house.tags.map(tag => {
            return (
                  <div className='tag'><p className='tag-text'>{textTag}</p></div>
            )
//                               })}
             
//                         </div>
//                   )


//             }
//       }))
}

export default Tag;