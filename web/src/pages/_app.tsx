/* eslint-disable react/jsx-props-no-spreading */

import 'firebase/auth';
import 'firebase/firestore';
import { AppProps } from 'next/app';
import { Fuego, FuegoProvider } from '@nandorojo/swr-firestore';
import { firebaseConfig } from '../../../firebase-config.js';

import '../styles/global.css';

const fuego = new Fuego(firebaseConfig);

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <FuegoProvider fuego={fuego}>
    <Component {...pageProps} />
  </FuegoProvider>
);

export default App;
