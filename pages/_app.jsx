import React from 'react';
import '../styles/reset.css';
import '../styles/main.scss';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div className="MainWrap">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
