import { CardsInfo } from "./cardsInfo"
function Card() {
  return (
    <>
        {CardsInfo.map((cardInfo) => (
             <div className="card" key={cardInfo.id}>
             <div className="card-front"></div>
             <div className="card-back">{cardInfo.name}</div>
            </div>
        )
          
       )}
      
    </>
  )
}

export default Card
