import React from 'react';
import tw, { css } from 'twin.macro';

import Container from 'components/container';

const Contact = (): JSX.Element => (
  <Container>
    <div tw="bg-white">
      <div tw="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8">
        <div tw="divide-y-2 divide-gray-200">
          <div tw="lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 tw="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Get in touch
            </h2>
            <div tw="grid grid-cols-1 gap-12 mt-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
              <div>
                <h3 tw="text-lg font-medium leading-6 text-gray-900">
                  Collaborate
                </h3>
                <dl tw="mt-2 text-base text-gray-500">
                  <div>
                    <dt tw="sr-only">Email</dt>
                    <dd>support@example.com</dd>
                  </div>
                  <div tw="mt-1">
                    <dt tw="sr-only">Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 tw="text-lg font-medium leading-6 text-gray-900">Press</h3>
                <dl tw="mt-2 text-base text-gray-500">
                  <div>
                    <dt tw="sr-only">Email</dt>
                    <dd>support@example.com</dd>
                  </div>
                  <div tw="mt-1">
                    <dt tw="sr-only">Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 tw="text-lg font-medium leading-6 text-gray-900">
                  Join our team
                </h3>
                <dl tw="mt-2 text-base text-gray-500">
                  <div>
                    <dt tw="sr-only">Email</dt>
                    <dd>support@example.com</dd>
                  </div>
                  <div tw="mt-1">
                    <dt tw="sr-only">Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 tw="text-lg font-medium leading-6 text-gray-900">
                  Say hello
                </h3>
                <dl tw="mt-2 text-base text-gray-500">
                  <div>
                    <dt tw="sr-only">Email</dt>
                    <dd>support@example.com</dd>
                  </div>
                  <div tw="mt-1">
                    <dt tw="sr-only">Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div tw="pt-16 mt-16 lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 tw="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Locations
            </h2>
            <div tw="grid grid-cols-1 gap-12 mt-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
              <div>
                <h3 tw="text-lg font-medium leading-6 text-gray-900">
                  Los Angeles
                </h3>
                <div tw="mt-2 text-base text-gray-500">
                  <p>4556 Brendan Ferry</p>
                  <p tw="mt-1">Los Angeles, CA 90210</p>
                </div>
              </div>
              <div>
                <h3 tw="text-lg font-medium leading-6 text-gray-900">
                  New York
                </h3>
                <div tw="mt-2 text-base text-gray-500">
                  <p>886 Walter Streets</p>
                  <p tw="mt-1">New York, NY 12345</p>
                </div>
              </div>
              <div>
                <h3 tw="text-lg font-medium leading-6 text-gray-900">
                  Toronto
                </h3>
                <div tw="mt-2 text-base text-gray-500">
                  <p>7363 Cynthia Pass</p>
                  <p tw="mt-1">Toronto, ON N3Y 4H8</p>
                </div>
              </div>
              <div>
                <h3 tw="text-lg font-medium leading-6 text-gray-900">
                  Chicago
                </h3>
                <div tw="mt-2 text-base text-gray-500">
                  <p>726 Mavis Island</p>
                  <p tw="mt-1">Chicago, IL 60601</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Contact;
