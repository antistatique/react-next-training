import React, { useContext, useEffect, useState } from "react";
import { FavoriteContext } from "../App";

export type PokemonsResponse = {
  previous: string | null;
  next: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

const url = "https://pokeapi.co/api/v2/pokemon/";

const Pokemons = (): JSX.Element => {
  // Create a array of data
  const [allPokemons, setAllPokemons] = useState<PokemonsResponse | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setAllPokemons);
  }, []);

  const handleRefreshPokemons = (newUrl: string | null) => {
    
    if (newUrl !== null){ 
      fetch(newUrl)
      .then((response) => response.json())
      .then(setAllPokemons);
    }
  };

  // utilisation du context qui passe va prendre les "props" déclarée plus haut
  const { favorite, setFavorite } = useContext(FavoriteContext);

  if (allPokemons === null) return <p>No pokemons</p>;

  // Affichage de la liste avec une boucle
  return (
    <div>
      <div className="flex justify-end text-white mb-8">
        {allPokemons.previous !== null && (
          <button
            onClick={() => handleRefreshPokemons(allPokemons.previous)}
            className="p-2 flex items-center rounded-md bg-indigo-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Previous
          </button>
        )}
        {allPokemons.next !== null && (
          <button
            onClick={() => handleRefreshPokemons(allPokemons.next)}
            className="p-2 ml-4 flex rounded-md items-center bg-indigo-700"
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="grid grid-cols-6 gap-4">
        {allPokemons &&
          allPokemons.results.map((item) => (
            <div className="border p-6 rounded-xl" key={item.name}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url
                  .split("/")
                  .filter((i) => i.length > 0)
                  .slice(-1)}.png`}
                alt="pokemon random"
              />
              <p className="text-center mt-4 font-semibold">{item.name}</p>
              <div className="flex rounded-md items-center space-x-2">
                <p>Mettre en favoris:</p>
                <input
                  type="radio"
                  value={item.name}
                  name="pokemon"
                  onChange={() => setFavorite(item.name)}
                  checked={favorite === item.name}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Pokemons;
