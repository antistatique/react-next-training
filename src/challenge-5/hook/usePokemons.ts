import { useState, useEffect, useReducer } from 'react';

const url = "https://pokeapi.co/api/v2/pokemon/";

export type PokemonsResponse = {
  previous: string | null;
  next: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

const initialState = {
  loading: false,
  error: false,
  previous: "",
  next: "",
  results: [{
    name: "",
    url: "",
  }]
};

const reducer = (state = initialState, action: { type: any; }) => {
  switch (action.type) {
    case 'loading': {
      return { ...state, loading: true };
    }
    case 'success': {
      return { ...state };
    }
    case 'error': {
      return { ...state, error: true };
    }
    default: {
      return state;
    }
  }
};

const usePokemons = (url:string) => {

  const [allPokemons, dispatchPokemons ] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatchPokemons({type: "loading"})

    fetch(url)
    .then( (response) => {
      dispatchPokemons({ type: 'success' });
      return response.json();
    }).catch((error) => {
      dispatchPokemons({ type: 'error' }) ; 
    });
  }, []);

  const handleRefreshPokemons = (newUrl: string | null) => {
    if (newUrl !== null) {
      fetch(newUrl)
        .then( (response) => {
          dispatchPokemons({ type: 'success' });
          return response.json();
        }).catch((error) => {
          dispatchPokemons({ type: 'error' }) ; 
        });
    }
  };
  
  return {allPokemons, handleRefreshPokemons}
}

export default usePokemons



