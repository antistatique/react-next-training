import { useState, useEffect } from 'react';

const url = "https://pokeapi.co/api/v2/pokemon/";

export type PokemonsResponse = {
  previous: string | null;
  next: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

const usePokemons = (url:string) => {
  const [allPokemons, setAllPokemons] = useState<PokemonsResponse | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setAllPokemons);
  }, []);

  const handleRefreshPokemons = (newUrl: string | null) => {
    if (newUrl !== null) {
      fetch(newUrl)
        .then((response) => response.json())
        .then(setAllPokemons);
    }
  };
  
  return {allPokemons, handleRefreshPokemons}
}

export default usePokemons



