import React from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import tw, { css } from 'twin.macro';

import Container from 'components/container';

export type PokemonsResponse = {
  pokemons: {
    previous: string;
    next: string;
    results: {
      name: string;
      url: string;
    }[];
  };
  page: number;
};

const Pokemons = ({ pokemons, page }: PokemonsResponse): JSX.Element => (
  // Affichage de la liste avec une boucle
  <Container>
    <div>
      {pokemons.previous !== null && (
        <Link key="previous" href={`/pokemons?page=${page - 1}`} passHref>
          <a tw="flex items-center p-2 bg-indigo-700 rounded-md text-white">
            Previous
          </a>
        </Link>
      )}

      {pokemons.next !== null && (
        <Link key="previous" href={`/pokemons?page=${page + 1}`} passHref>
          <a tw="flex items-center p-2 bg-indigo-700 rounded-md text-white">
            Next
          </a>
        </Link>
      )}
    </div>
    <div tw="grid grid-cols-6 gap-4">
      {pokemons &&
        pokemons.results.map(
          (item: { name: string | null | undefined; url: string }) => (
            <Link key={item.name} href={`/pokemons/${item.name}`} passHref>
              <a>
                <div tw="p-6 border rounded-xl" key={item.name}>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url
                      .split('/')
                      .filter((i: string) => i.length > 0)
                      .slice(-1)}.png`}
                    alt="pokemon random"
                  />
                  <p tw="mt-4 font-semibold text-center">{item.name}</p>
                </div>
              </a>
            </Link>
          )
        )}
    </div>
  </Container>
);

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  const offset = (+page - 1) * 20;

  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
  );
  const pokemons = await res.json();
  console.log(pokemons);
  return {
    props: {
      pokemons,
      page: +page,
    },
  };
};

export default Pokemons;
