import React, { useEffect, useState } from "react"

export type PokemonCardProps = {
  name: string;
  setFavorite: ( name: string) => void; 
}

const PokemonCard = ({name, setFavorite }: PokemonCardProps) => {

  return (
    <tr>
      <td>
        <p>{name}</p>
      </td>
      <td>
        <input 
          type="radio" 
          value={name} 
          name="pokemon" 
          onChange={ 
            () => setFavorite(name)
          }
        />
      </td>
    </tr>
  )
}

export default PokemonCard;