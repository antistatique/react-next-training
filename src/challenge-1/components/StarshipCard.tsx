import React, { useState } from "react"
import starshipModel from "../types/starship";

type StarshipCardProps = {
  starship: starshipModel,
}

const StarshipCard = ( {starship}:StarshipCardProps) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div>
      <button 
        type="button"
        onClick={() => setIsSelected(!isSelected)}
      >
        {isSelected === true ? 'Favoris' : 'pas favoris'}
      </button>
      <img src="https://i.pinimg.com/originals/ee/e5/ed/eee5ed80f3c626407aebfd17ce8bd828.jpg" alt="mon vaisseau"/>
      <p>{starship.name}</p>
      <p>{starship.model}</p>
      <p>{starship.crew}</p>
    </div>
  )
}

export default StarshipCard;