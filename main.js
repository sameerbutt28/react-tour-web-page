import Data from "../components/data"
import Star from "../images/staar.jpeg"

export default function Main(proops){
    
    return( 
    <div className="main">
        <div className="imgcontainer">
        <img src={require(`../images/${proops.items.img}`)} className="images" />

        </div>
        <div className="introcontainer">
   <p className="location"> {proops.items.location}</p>
   <p className="title">  {proops.items.title}</p>
   <p className="date"> {proops.items.date}</p>
   <p className="description"> {proops.items.description}</p>
   <div className="stats">
   <img src={Star} className="starimg" />
  <p className="rating"> {proops.items.stats.rating} <strong>.</strong></p>
   <p className="reviews"> ({proops.items.stats.reviewCount})</p>
   </div>
 


        </div>
    </div>
    )

    
    } 