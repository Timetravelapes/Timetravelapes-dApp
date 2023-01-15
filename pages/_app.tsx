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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Use Our Marketplace List Your NFTs For Sale, Accept Bids, and Buy NFTs"
         
        />
        <meta property="og:image" content="https://example.com/ogp.jpg" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="TTA" />
        
        
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
