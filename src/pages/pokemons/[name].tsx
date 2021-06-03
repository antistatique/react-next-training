import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import tw, { css } from 'twin.macro';
import { PokemonType } from 'types/pokemon';

import Container from 'components/container';

export type PokemonProps = {
  pokemon: PokemonType;
};

const Pokemon = ({ pokemon }: PokemonProps): JSX.Element => (
  <Container>
    <section tw="flex">
      <img
        title={pokemon.name}
        alt={pokemon.name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.order}.png`}
      />
      <div>
        <h1 tw="text-black text-4xl">
          {pokemon.name} <span>#{pokemon.order}</span>
        </h1>
        <div>
          <h2>Height:</h2>
          <p>{pokemon.height}</p>
          <h2>Weight:</h2>
          <p>{pokemon.weight}</p>
          <h2>Base Experience</h2>
          <p>{pokemon.base_experience}</p>
        </div>
        <div>
          <h2>Types:</h2>
          <div tw="flex">
            {pokemon.types.map(({ type }) => (
              <span
                key={type.name}
                tw="inline-flex mr-2 items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800"
              >
                {type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Container>
);

// This function gets called at build time
export const getStaticPaths: GetStaticPaths<{ name: string }> = async () => {
  // Call an external API endpoint to get pokemons
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const pokemons = await res.json();

  // Get the paths we want to pre-render based on pokemons
  const paths = pokemons.results.map((pokemon: { name: string }) => ({
    params: { name: pokemon.name },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
};

// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params contains the pokemon `name`.
  // If the route is like /pokemons/1, then params.name is 1
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params?.name}`);
  const pokemon = await res.json();

  // Pass pokemon data to the page via props
  return { props: { pokemon } };
};

export default Pokemon;
