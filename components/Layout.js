
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { Store } from "../utils/Store";
import data from "../utils/data";
import { useState } from "react";
import { useEffect } from "react";

export function Layout({ title, children }) {
    const { state } = useContext(Store)
    const { cart } = state
    const [cartItemsCount, setCartItemsCount] = useState(0)
    useEffect(() => {
        setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0))
    }, [cart.cartItems])
  return (
    <>
      <Head>
        <title>{title ? title + ' - uVinyl' : 'uVinyl'}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
            <nav className="flex h-12 justify-between shadow-md it ems-center px-4">
                <Link href='/' className="text-lg font-bold">

                    uVinyl
                </Link>
                <div>
                    <Link href='/cart' className="p-2">Cart
                    {cartItemsCount > 0 && (
                        <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                            {cartItemsCount}
                        </span>
                    )}</Link>
                    <Link href='/login' className="p-2">Login</Link>
                </div>
            </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
            <p>Copyright 2023 uVinyl</p>
        </footer>
      </div>
    </>
  );
}
