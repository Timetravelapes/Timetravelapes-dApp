import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Claim.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>WELCOME TO TIMETRAVELAPES DAPP</h1>
      <div className={styles.nftBoxGrid}>
      <div
          className={styles.optionSelectBox1}
          role="button"
          onClick={() => router.push(`/`)}
        >
          {/* Staking GREEN PILL */}
          <p className={styles.selectBoxDescription1}>
          <img src={`/icons/Dapp.png`} alt="drop" />
          </p>
        </div>
        <p style={{ color: "#ff00f6" }}>💥STAKE💥</p><p></p><p style={{ color: "#ff00f6" }}>💥MINT💥</p><p></p><p style={{ color: "#ff00f6" }}>💥CLAIM💥</p><p></p><p style={{ color: "#ff00f6" }}>💥SALE💥</p>
        
        <div
          className={styles.optionSelectBox1}
          role="button"
          onClick={() => router.push(`https://snowtrace.io/token/0xa98FfDBAEE3F2b3BFCb3dbFd879a34e6aF0ba80e#code`)}
        >
          {/* Staking GREEN PILL */}
          <p className={styles.selectBoxDescription1}>
          <img src={`/icons/tokenbanner.png`} alt="drop" />
          </p>
        </div>

      </div>
    </div>
  );
};

export default Home;
