/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import Link from 'next/link';
import tw, { css } from 'twin.macro';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Pokemons', href: '/pokemons', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

const Header = (): JSX.Element => (
  <header tw="bg-gray-100 ">
    <nav tw="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
      <div tw="flex items-center justify-between w-full py-6 border-b border-indigo-500 lg:border-none">
        <div tw="flex items-center">
          <img
            tw="w-10 h-10"
            src="https://www.pngkey.com/png/full/2-21565_pokemon-sapphire-logo-png-for-kids-pokeball-transparent.png"
            alt=""
          />
          <div tw="hidden ml-10 space-x-8 lg:block">
            {navigation.map(link => (
              <Link href={link.href} key={link.name} passHref>
                <a tw="text-base font-medium hover:text-pink-900">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div tw="flex flex-wrap justify-center py-4 space-x-6 lg:hidden">
        {navigation.map(link => (
          <Link href={link.href} key={link.name} passHref>
            <a tw="text-base font-medium hover:text-pink-900">{link.name}</a>
          </Link>
        ))}
      </div>
    </nav>
  </header>
);
export default Header;
