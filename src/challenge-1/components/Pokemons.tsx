import React, { useEffect, useState } from 'react';
import PokemonCard, {PokemonCardProps} from './PokemonCard';


const Pokemons  = () => {

  // Create a array of data
  const [allPokemons, setAllPokemons] = useState<Array<PokemonCardProps>>();

  //Fetching Data
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json())
        .then(data => setAllPokemons(data.results));
  }, []);

  // Favorite
  const [favorite, setFavorite] = useState('aucun favori');


  // Affichage de la liste avec une boucle
  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Favoris</th>
          </tr>
        </thead>
        <tbody>
          { allPokemons && 
              allPokemons.map( (item, index) => 
                <PokemonCard key="pokemon-index" name={item.name} setFavorite={setFavorite}/>
              )
          }
        </tbody>
      </table>
      <button 
        type="button" 
        aria-label="previous page" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Prev
      </button>
      <button 
        type="button" 
        aria-label="next page" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Next
      </button>
      <p>Mon pokemon favoris: {favorite}</p>
    </div>
  );
};

export default Pokemons;