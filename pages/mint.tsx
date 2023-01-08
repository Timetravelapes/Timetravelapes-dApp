import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Mint.module.css";

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>TIMETRAVELAPES MINTING PAGE</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox1}
          role="button"
          onClick={() => router.push(`/redpill`)}
        >
          {/* Mint Red Pill */}
            <img src={`/icons/RED.webp`} alt="drop" />
            <h2 className={styles.selectBoxTitle1}>Mint BTC Red Pill</h2>
            <p className={styles.selectBoxDescription1}>
            *4500 TTA Token releas 0,10$ *One 3D NFT for Blockchain Gaming *100/1000 NFTs have 450$ Amazon Coupon included *100/1000 NFTs have 0,01BTC included *70% APY by Stake TTA *Access to Metaverse *Stake your NFT
            </p>
        </div>

        <div
          className={styles.optionSelectBox2}
          role="button"
          onClick={() => router.push(`/bluepill`)}
        >
          {/* Mint BLUE Pill */}
            <img src={`/icons/blue.webp`} alt="drop" />
            <h2 className={styles.selectBoxTitle2}>Mint ETH Blue Pill</h2>
            <p className={styles.selectBoxDescription2}>
            *2000 TTA Token releas 0,10$ *One 3D NFT for Blockchain Gaming *250/2500 NFTs have 200$ Amazon Coupon included *250/2500 NFTs have 0,5ETH included *70% APY by Stake TTA *Access to Metaverse *Stake your NFT
            </p>
        </div>

        <div
          className={styles.optionSelectBox3}
          role="button"
          onClick={() => router.push(`/greenpill`)}
          >
          {/* Mint Geen Pill */}
            <img src={`/icons/green.webp`} alt="drop" />
            <h2 className={styles.selectBoxTitle3}>Mint BCH Green Pill</h2>
            <p className={styles.selectBoxDescription3}>
            *350 TTA Token releas 0,10$ *One 3D NFT for Blockchain Gaming *700/7000 NFTs have 35$ Amazon Coupon included *700/7000 NFTs have 0,5BCH included *70% APY by Stake TTA *Access to Metaverse *Stake your NFT
            </p>
        </div>


        <div
          className={styles.optionSelectBox4}
          role="button"
          onClick={() => router.push(`/goldpill`)}
        >
          {/* Mint Gold Pill */}
          <img src={`/icons/gold.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle4}>Mint BNB Gold Pill</h2>
          <p className={styles.selectBoxDescription4}>
          *800 TTA Token releas 0,10$ *One 3D NFT for Blockchain Gaming *500/5000 NFTs have 80$ Amazon Coupon included *500/5000 NFTs have 1BNB included *70% APY by Stake TTA *Access to Metaverse *Stake your NFT
          </p>
        </div>

        <div
          className={styles.optionSelectBox5}
          role="button"
          onClick={() => router.push(`/rosepill`)}
          >
          {/* Mint Rose Pill */}
            <img src={`/icons/rose.webp`} alt="drop" />
            <h2 className={styles.selectBoxTitle5}>Mint Pastel Rose Pill</h2>
            <p className={styles.selectBoxDescription5}>
            *30 TTA Token releas 0,10$ *One 3D NFT for Blockchain Gaming *70% APY by Stake TTA *Access to Metaverse *Stake your NFT
            </p>
        </div>

        <div
          className={styles.optionSelectBox6}
          role="button"
          onClick={() => router.push(`/cyanpill`)}
        >
          {/* Mint cyan Pill */}
          <img src={`/icons/cyan.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle6}>Mint Pastel Cyan Pill</h2>
          <p className={styles.selectBoxDescription6}>
          *30 TTA Token releas 0,10$ *One 3D NFT for Blockchain Gaming *70% APY by Stake TTA *Access to Metaverse *Stake your NFT
          </p>
        </div>

        <div
          className={styles.optionSelectBox7}
          role="button"
          onClick={() => router.push(`/mintpill`)}
        >
          {/* Mint Mint Pill */}
          <img src={`/icons/mint.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle7}>Mint Pastel Mint Pill</h2>
          <p className={styles.selectBoxDescription7}>
          *30 TTA Token releas 0,10$ *One 3D NFT for Blockchain Gaming *70% APY by Stake TTA *Access to Metaverse *Stake your NFT
          </p>
        </div>

        <div
          className={styles.optionSelectBox8}
          role="button"
          onClick={() => router.push(`/lemonpill`)}
        >
          {/* Mint Lemon Pill */}
          <img src={`/icons/lemon.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle8}>Mint Pastel Lemon Pill</h2>
          <p className={styles.selectBoxDescription8}>
          *30 TTA Token releas 0,10$ *One 3D NFT for Blockchain Gaming *70% APY by Stake TTA *Access to Metaverse *Stake your NFT
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mint;
