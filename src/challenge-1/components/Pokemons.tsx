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
      <p>Mon pokemon favoris: {favorite}</p>
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
      
    </div>
  );
};

export default Pokemons;