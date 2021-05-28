/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import tw, { css } from 'twin.macro';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Pokemons', href: '/pokemons', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

const Header = (): JSX.Element => (
  <Disclosure as="nav" tw="bg-white">
    {({ open }) => (
      <>
        <div tw="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div tw="relative flex items-center justify-between h-16">
            <div tw="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button tw="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span tw="sr-only">Open main menu</span>
                {open ? (
                  <XIcon tw="block w-6 h-6" aria-hidden="true" />
                ) : (
                  <MenuIcon tw="block w-6 h-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div tw="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
              <div tw="flex items-center flex-shrink-0">
                <img
                  tw="hidden w-auto h-8 lg:block"
                  src="https://w7.pngwing.com/pngs/1001/304/png-transparent-pokemon-go-poke-ball-pokemon-go-trademark-logo-desktop-wallpaper.png"
                  alt="Workflow"
                />
              </div>
              <div tw="hidden sm:block sm:ml-6">
                <div tw="flex space-x-4">
                  {navigation.map(item => (
                    <Link key={item.name} href={item.href} passHref>
                      <a
                        css={[
                          item.current
                            ? tw`text-white bg-gray-900`
                            : tw`text-black hover:bg-gray-700 hover:text-white`,
                          tw`px-3 py-2 text-sm font-medium rounded-md`,
                        ]}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Disclosure.Panel tw="sm:hidden">
          <div tw="px-2 pt-2 pb-3 space-y-1">
            {navigation.map(item => (
              <Link key={item.name} href={item.href} passHref>
                <a
                  css={[
                    item.current
                      ? tw`text-white bg-gray-900`
                      : tw`text-black hover:bg-gray-700 hover:text-white`,
                    tw`px-3 py-2 text-sm font-medium rounded-md`,
                  ]}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);
export default Header;
