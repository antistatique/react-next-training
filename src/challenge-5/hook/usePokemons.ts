import { useState, useEffect, useReducer } from 'react';

const url = 'https://pokeapi.co/api/v2/pokemon/';

export type PokemonsResponse = {
  loading: boolean;
  error: boolean;
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
  previous: '',
  next: '',
  results: [],
};

const reducer = (
  state = initialState,
  action: { type: any; payload: any },
): PokemonsResponse => {
  switch (action.type) {
    case 'loading': {
      return { ...state, loading: true, error: false };
    }
    case 'success': {
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: false,
      };
    }
    case 'error': {
      return { ...state, error: true, loading: false };
    }
    default: {
      return state;
    }
  }
};

const usePokemons = (url: string) => {
  const [allPokemons, dispatchPokemons] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatchPokemons({ type: 'loading' });

    fetch(url)
      .then((response) => {
        response.json().then((payload) =>
          dispatchPokemons({
            type: 'success',
            payload,
          }),
        );
      })
      .catch((error) => {
        dispatchPokemons({ type: 'error' });
      });
  }, []);

  const handleRefreshPokemons = (newUrl: string | null) => {
    if (newUrl !== null) {
      fetch(newUrl)
        .then((response) => {
          response.json().then((payload) =>
            dispatchPokemons({
              type: 'success',
              payload,
            }),
          );
        })
        .catch((error) => {
          dispatchPokemons({ type: 'error' });
        });
    }
  };

  return { allPokemons, handleRefreshPokemons };
};

export default usePokemons;
