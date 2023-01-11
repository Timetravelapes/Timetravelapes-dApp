import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home1.module.css";
import React, {useState, useContext, useEffect } from "react";

//INTERN IMPORT
import { HeroSection } from "../components/index";


const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>WELCOME TO TIMETRAVELAPES DAPP</h1>
      <div className={styles.nftBoxGrid}>
      <div className={styles.swapbox}>
      <HeroSection accounts="hey" tokenData="DATA" />
    </div>
      <div
          className={styles.optionSelectBox2}
          role="button"
          onClick={() => router.push(`/`)}
        >
          {/* Staking GREEN PILL */}
          <p className={styles.selectBoxDescript}>
          <img src={`/icons/Dapp.png`} alt="drop" />
          
          </p>
        </div>
        <div
          className={styles.optionSelectimg}
          role="button"
          onClick={() => router.push(`https://snowtrace.io/token/0xa98FfDBAEE3F2b3BFCb3dbFd879a34e6aF0ba80e#code`)}
        >
          {/* Staking GREEN PILL */}
          <p className={styles.selectBoxDescription}>
          <img src={`/icons/tokenbanner.png`} alt="drop" />
          </p>
        </div>
        <p className={styles.optionSelect}>💥STAKE💥  💥SALE💥  💥CLAIM💥  💥MINT💥</p>
          
        

      </div>
    </div>
  );
};

export default Home;
