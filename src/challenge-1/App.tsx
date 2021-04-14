import React from 'react';
import Pagination from './components/Pagination';
import Pokemons from './components/Pokemons';

const App = () => (
  <div className="p-10">
    <h1 className="font-sans text-3xl">Pokemons</h1>
    <Pagination currentPage={2} pokemonPerPage={6} totalPages={5}>
      <Pokemons />
    </Pagination>
  </div>
);

export default App;
