import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Stake.module.css";

const Stake: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Stake your Timetravelapes NFT</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stakerose`)}
        >
          {/* Staking ROSE PILL */}
            <img src={`/icons/rose.webp`} alt="drop" />
            <h2 className={styles.selectBoxTitle}>ROSE Pill</h2>
            <p className={styles.selectBoxDescription}>
            get every hour <b>0,0001</b> TTA
            </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stakecyan`)}
        >
          {/* Staking CYAN PILL */}
            <img src={`/icons/cyan.webp`} alt="drop" />
            <h2 className={styles.selectBoxTitle}>CYAN Pill</h2>
            <p className={styles.selectBoxDescription}>
            get every hour <b>0,0001</b> TTA
            </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stakelemon`)}
        >
          {/* Staking LEMON PILL */}
            <img src={`/icons/lemon.webp`} alt="drop" />
            <h2 className={styles.selectBoxTitle}>LEMON Pill</h2>
            <p className={styles.selectBoxDescription}>
            get every hour <b>0,0001</b> TTA
            </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stakemint`)}
        >
          {/* Staking MINT PILL */}
          <img src={`/icons/mint.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>MINT Pill</h2>
          <p className={styles.selectBoxDescription}>
            get every hour <b>0,0001</b> TTA
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stakered`)}
        >
          {/* Staking RED PILL */}
          <img src={`/icons/red.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>BTC Red Pill</h2>
          <p className={styles.selectBoxDescription}>
            get every hour <b>1,0</b> TTA
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stakeblue`)}
        >
          {/* Staking BLUE PILL */}
          <img src={`/icons/blue.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>ETH Blue Pill</h2>
          <p className={styles.selectBoxDescription}>
            get every hour <b>0,1</b> TTA
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stakegold`)}
        >
          {/* Staking GOLD PILL */}
          <img src={`/icons/gold.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>BNB Gold Pill</h2>
          <p className={styles.selectBoxDescription}>
            get every hour <b>0,01</b> TTA
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stakegreen`)}
        >
          {/* Staking GREEN PILL */}
          <img src={`/icons/green.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>BCH Green Pill</h2>
          <p className={styles.selectBoxDescription}>
            get every hour <b>0,001</b> TTA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stake;
