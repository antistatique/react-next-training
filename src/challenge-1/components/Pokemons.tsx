import React, { useEffect, useState } from 'react';
import PokemonCard, {PokemonCardProps} from './PokemonCard';


const Pokemons  = () => {

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
                <PokemonCard key={`pokemon-${index}`} name={item.name} setFavorite={setFavorite}/>
              )
          }
        </tbody>
      </table>
      <button onClick={()=> setOffset(offset + 20)}>Next</button>
      <button onClick={()=> setOffset(offset - 20)}>previous</button>
    </div>
  );
};

export default Pokemons;