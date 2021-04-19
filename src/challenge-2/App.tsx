import React, { createContext, useContext, useState } from 'react';
import Pokemons from './components/Pokemons';

export type ContextProps = {
  children: React.ReactNode;
};

type FavoriteContextType = {
  favorite: string;
  setFavorite: (newFavorite: string) => void;
};

const FavoriteContext = createContext<FavoriteContextType>({
  favorite: '',
  setFavorite: console.log,
});

const FavoriteProvider = ({ children }: ContextProps) => {
  const [favorite, setFavorite] = useState('aucun favori');

  return (
    <FavoriteContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteProvider, FavoriteContext };

const AppContent = () => {
  const { favorite } = useContext(FavoriteContext);

  return (
    <>
      <h1 className="text-xl font-bold">React Formation - Challenge #2</h1>
      <img
        src="/img/pokemon.webp"
        alt="pokemon logo"
        className="w-60 mx-auto my-4"
      />
      <p className="text-center font-bold text-xl text-indigo-700	my-8">
        Mon pokemon favoris: <span className="text-yellow-500">{favorite}</span>
      </p>
    </>
  );
};

const App = () => (
  <div className="p-10 flex-col justify-center">
    <FavoriteProvider>
      <AppContent />
      <Pokemons />
    </FavoriteProvider>
  </div>
);

export default App;
