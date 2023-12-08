import { useEffect, useState } from "react";
import { CardsInfo } from "./cardsInfo";

function Card() {
  const [filppedStates, setFlippedStates] = useState({});
  const [shuffledCards , setShuffledCards] = useState([])
  const flipHandler = (id) => {
    setFlippedStates((prevstates) => ({
      ...prevstates,
      [id]: !filppedStates[id],
    }));
  };
  const shuffleCards = () => {
    const shuffled = [...CardsInfo].sort(() => Math.random() - 0.5)
    setShuffledCards(shuffled);
  }
useEffect(() => {
  shuffleCards()
} , [])

  return (
    <>
      {shuffledCards.map((cardInfo) => (
        <div
          className={`${filppedStates[cardInfo.id] ? "flipped" : ""} card`}
          key={cardInfo.id}
          onClick={() => flipHandler(cardInfo.id)}
        >
          <div className="card-front"></div>
          <div className="card-back">
            <img src={cardInfo.img}></img>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
