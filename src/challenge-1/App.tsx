import React, { useState } from 'react';
import Pokemons from './components/Pokemons';

const App = () => {

  // Set my favorite pokemon
  const [favorite, setFavorite] = useState('aucun favori');

  return (
    <div className="p-10 flex-col justify-center">
      <h1 className="text-xl font-bold">React Formation - Challenge #1</h1>
      <img src="/img/pokemon.webp" alt="pokemon logo" className="w-60 mx-auto my-4"/>
      <p className="text-center font-bold text-xl text-indigo-700	my-8">
        Mon pokemon favoris: <span className="text-yellow-500">{favorite}</span>
      </p>
      <Pokemons setFavorite={setFavorite}/>
    </div>
  )
};

export default App;
