import React from "react";
import "../app/globals.css";

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
