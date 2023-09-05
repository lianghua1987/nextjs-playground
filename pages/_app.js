import React from "react";
import Navbar from "./components/Navbar";

export default function NextjsPlayground({Component, pageProps}) {

  return (
    <>
      <Navbar/>
      <Component {...pageProps}/>
    </>
  );
}