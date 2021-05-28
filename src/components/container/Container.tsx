import React from 'react';
import tw from 'twin.macro';

export type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => (
  <div tw="px-4 mx-auto max-w-6xl">{children}</div>
);

export default Container;
