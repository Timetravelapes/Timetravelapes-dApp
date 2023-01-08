import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Claim.module.css";

const Claimtta: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Claim your TTA Token</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`https://claim1.timetravelapes.com/`)}
        >
          {/* Staking ROSE PILL */}
            <img src={`/icons/rose.webp`} alt="drop" />
            <h2 className={styles.selectBoxTitle}>ROSE Pill</h2>
            <p className={styles.selectBoxDescription}>
            Claim <b>30</b> TTA Token
            </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`https://claim2.timetravelapes.com/`)}
        >
          {/* Staking CYAN PILL */}
            <img src={`/icons/cyan.webp`} alt="drop" />
            <h2 className={styles.selectBoxTitle}>CYAN Pill</h2>
            <p className={styles.selectBoxDescription}>
            Claim <b>30</b> TTA Token
            </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`https://claim3.timetravelapes.com/`)}
        >
          {/* Staking LEMON PILL */}
            <img src={`/icons/lemon.webp`} alt="drop" />
            <h2 className={styles.selectBoxTitle}>LEMON Pill</h2>
            <p className={styles.selectBoxDescription}>
            Claim <b>30</b> TTA Token
            </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`https://claim4.timetravelapes.com/`)}
        >
          {/* Staking MINT PILL */}
          <img src={`/icons/mint.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>MINT Pill</h2>
          <p className={styles.selectBoxDescription}>
            Claim <b>30</b> TTA Token
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`https://red.timetravelapes.com/`)}
        >
          {/* Staking RED PILL */}
          <img src={`/icons/RED.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>BTC Red Pill</h2>
          <p className={styles.selectBoxDescription}>
            Claim <b>4500</b> TTA Token
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`https://blue.timetravelapes.com/`)}
        >
          {/* Staking BLUE PILL */}
          <img src={`/icons/blue.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>ETH Blue Pill</h2>
          <p className={styles.selectBoxDescription}>
            Claim <b>2000</b> TTA Token
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`https://gold.timetravelapes.com/`)}
        >
          {/* Staking GOLD PILL */}
          <img src={`/icons/gold.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>BNB Gold Pill</h2>
          <p className={styles.selectBoxDescription}>
            Claim <b>800</b> TTA Token
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`https://green.timetravelapes.com/`)}
        >
          {/* Staking GREEN PILL */}
          <img src={`/icons/green.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>BCH Green Pill</h2>
          <p className={styles.selectBoxDescription}>
            Claim <b>350</b> TTA Token
          </p>
        </div>
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

export default Claimtta;
