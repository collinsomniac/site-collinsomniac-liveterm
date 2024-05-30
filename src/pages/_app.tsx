import React, { createContext, useContext, useState, useRef } from 'react';
import '../styles/global.css';
import Head from 'next/head';

const isInIframe = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};

const App = ({ Component, pageProps }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    // Only focus if not inside an iframe
    if (!isInIframe() && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
          key="viewport"
          maximum-scale="1"
        />
      </Head>
      <div
        className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base"
        onClick={onClickAnywhere}
      >
        <main className="bg-light-background dark:bg-dark-background w-full h-full p-2">
          <Component {...pageProps} inputRef={inputRef} />
        </main>
      </div>
    </>
  );
};

export default App;
