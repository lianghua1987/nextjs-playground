import React from "react";
import App from "next/app";
import Navbar from "./components/Navbar";

export default function NextjsPlayground({Component, pageProps}) {

  return (
    <>
      <Navbar/>
      <Component {...pageProps}/>
    </>
  );

  NextjsPlayground.getInitialProps = async (context) => {
    const ctx = await App.getInitialProps(context)

    return {...ctx}
  }
}