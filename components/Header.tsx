import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Header() {
  // Helpful thirdweb hooks to connect and manage the wallet from metamask.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div>
          <Link href="/" passHref role="button">
            <img
              src={`/Homeicon.png`}
              alt="Logo"
              width={40}
              height={40}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
      </div>
      <div className={styles.center0}>
        <div>
          <Link href="/stake" passHref role="button">
          <a className={styles.mainButton2} style={{ textDecoration: "none" }}>
              Stake NFT
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.center1}>
        <div>
          <Link href="/mint" passHref role="button">
          <a className={styles.mainButton2} style={{ textDecoration: "none" }}>
              Mint NFT
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.center2}>
        <div>
          <Link href="/claimtta" passHref role="button">
          <a className={styles.mainButton2} style={{ textDecoration: "none" }}>
              Claim TTA
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.center3}>
        <div>
          <Link href="/market" passHref role="button">
          <a className={styles.mainButton2} style={{ textDecoration: "none" }}>
              Marketplace
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.center4}>
        <div>
          <Link href="https://app.timetravelapes.com/stakes/stake-your-tta-token" passHref role="button">
          <a className={styles.mainButton2} style={{ textDecoration: "none" }}>
              Stake TTA
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.center5}>
        <div>
          <Link href="https://discord.com/invite/cU5c552APM" passHref role="button">
          <a className={styles.mainButton2} style={{ textDecoration: "none" }}>
              Get Whitelisted
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        {address ? (
          <>
            <a
              className={styles.secondaryButton}
              onClick={() => disconnectWallet()}
            >
              Disconnect Wallet
            </a>
            <p style={{ marginLeft: 8, marginRight: 8, color: "#ff00f6" }}>|</p>
            <p>{address.slice(0, 6).concat("...").concat(address.slice(-4))}</p>
          </>
        ) : (
          <a
            className={styles.mainButton3}
            onClick={() => connectWithMetamask()}
          >
            Connect Wallet
          </a>
        )}
      </div>
    </div>
    
  );
}
