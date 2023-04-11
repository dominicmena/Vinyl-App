import Head from "next/head";
import React from "react";

export function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - uVinyl' : 'uVinyl'}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header>header</header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
}
