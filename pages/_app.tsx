import React from "react";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";

import Header from "../components/Header";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Avalanche;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>Timetravelapes dApp</title>
        
        <meta
          name="description"
          content="Use Our Marketplace List Your NFTs For Sale, Accept Bids, and Buy NFTs"
          
        />
        
        <link rel="shortcut icon" href="/public/favicon.ico" />
        
        <meta
          name="keywords"
          content="Timetravelapes, dApp, Marketplace, NFT Marketplace, NFT Auction, OpenSea"
        />
        
      </Head>
      <Header />
      <Component {...pageProps} />
      
    </ThirdwebProvider>
  );
}

export default MyApp;
