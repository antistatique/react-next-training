import React from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';

import Header from 'components/header';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <GlobalStyles />
    <Header />
    <Component {...pageProps} />
  </>
);

export default App;
