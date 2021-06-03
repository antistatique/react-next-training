import React from 'react';
import Link from 'next/link';
import tw, { css } from 'twin.macro';

import Container from 'components/container';

const Home = (): JSX.Element => (
  <Container tw="lg:relative h-full">
    <div tw="text-center mt-20">
      <h1 tw="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span tw="block xl:inline">Pokedex</span>{' '}
        <span tw="block text-indigo-600 xl:inline">2.0</span>
      </h1>
      <p tw="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <div tw="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
        <div tw="rounded-md shadow">
          <Link href="/pokemons" passHref>
            <a tw="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
              Pokemons
            </a>
          </Link>
        </div>
        <div tw="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <Link href="/about" passHref>
            <a tw="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
              About
            </a>
          </Link>
        </div>
      </div>
    </div>
  </Container>
);

export default Home;
