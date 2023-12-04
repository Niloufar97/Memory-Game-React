import { useState } from "react"
import { CardsInfo } from "./cardsInfo"
function Card() {
    const [filppedStates , setFlippedStates] = useState({});
    const flipHandler = (id) =>{
        setFlippedStates((prevstate) => ({...prevstate, [id] : !filppedStates[id] })
       )
    }
  return (
    <>
        {CardsInfo.map((cardInfo) => (
             <div className={`${filppedStates[cardInfo.id]? "flipped" : ""} card`} key={cardInfo.id} onClick={() => flipHandler(cardInfo.id)}>
             <div className="card-front"></div>
             <div className="card-back">{cardInfo.name}</div>
            </div>
        )
          
       )}
      
    </>
  )
}

export default Card;