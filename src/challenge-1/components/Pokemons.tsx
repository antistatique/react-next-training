import React, { useEffect, useState } from 'react';
import PokemonCard, {PokemonCardProps} from './PokemonCard';

export type PokemonsProps = {
  setFavorite: ( name: string) => void; 
}

const Pokemons  = ({setFavorite}: PokemonsProps) => {

  // Create a array of data
  const [allPokemons, setAllPokemons] = useState<Array<PokemonCardProps>>();
  const [offset, setOffset] = useState(0);

  console.log(offset)

  //Fetching Data
  let url = "https://pokeapi.co/api/v2/pokemon/?offset=" + offset + "&limit=20";

  console.log(url)

  useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => setAllPokemons(data.results));
  }, [offset]);

  // Affichage de la liste avec une boucle
  return (
    <div>
      <div className="flex justify-end text-white mb-8">
        { offset > 0 &&
          <button onClick={()=> setOffset(offset - 20)} className="p-2 flex items-center rounded-md bg-indigo-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
        }
        <button onClick={()=> setOffset(offset + 20)} className="p-2 ml-4 flex rounded-md items-center bg-indigo-700"> 
          Next
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-6 gap-4">
          { allPokemons && 
              allPokemons.map( (item, index) => 
              <div className="border p-6 rounded-xl">
                <img src={`https://lorempokemon.fakerapi.it/pokemon/300/1${index}`} alt="pokemon random" />
                <p className="text-center mt-4 font-semibold">{item.name}</p>
                <div className="flex rounded-md items-center space-x-2">
                  <p>Mettre en favoris:</p>
                  <input 
                    type="radio" 
                    value={item.name} 
                    name="pokemon" 
                    onChange={ 
                      () => setFavorite(item.name)
                    }
                  />
                </div>
              </div>
                
              )
          }
      </div>
    </div>
  );
};

export default Pokemons;