import React, { createContext, useContext, useState } from 'react';
import Pokemons from './components/Pokemons';

export type ContextProps = {
  children: React.ReactNode
};

const FavoriteContext = createContext('');
const FavoriteDispatchContext = createContext();

const FavoriteProvider = ({children}: ContextProps) => {
  const [favorite, setFavorite] = useState('aucun favori')

  return (
    <FavoriteContext.Provider value={favorite}>
      <FavoriteDispatchContext.Provider value={setFavorite}>
        {children}
      </FavoriteDispatchContext.Provider>
    </FavoriteContext.Provider>
  );
}

export { FavoriteProvider, FavoriteContext, FavoriteDispatchContext };


const App = () => {

  const favorite = useContext(FavoriteContext);
  const setFavorite = useContext(FavoriteDispatchContext);

  return (
    <div className="p-10 flex-col justify-center">
      <FavoriteProvider>
        <h1 className="text-xl font-bold">React Formation - Challenge #1</h1>
        <img
          src="/img/pokemon.webp"
          alt="pokemon logo"
          className="w-60 mx-auto my-4"
        />
        <p className="text-center font-bold text-xl text-indigo-700	my-8">
          Mon pokemon favoris: <span className="text-yellow-500">{favorite}</span>
        </p>
        <Pokemons/>
      </FavoriteProvider>
    </div>
  );
};

export default App;
