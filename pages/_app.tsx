import React from 'react';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
