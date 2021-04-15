import React, { useEffect, useState } from "react"

export type PokemonCardProps = {
  name: string;
}

const PokemonCard = ({name}: PokemonCardProps) => {

  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

export default PokemonCard;