/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import { FaSpotify, FaInstagram } from "react-icons/fa";

export default function Navbar(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.navbarLeft}>
        <div className={styles.navbarLogo}>
          <img src="/res/favicon.png" alt="logo" width={48} height={48} />
        </div>
        <span>Pewnego Razu Zbrodnia</span>
      </div>
      <div className={styles.navbarRight}>
        <a href="/" className={styles.chosen}><div>Home</div></a>
        <a href="https://open.spotify.com/show/3WNL9lM9zyI79CsxN5xwe1" className={styles.link}>
              <FaSpotify className={styles.spotifyIcon}/>
              <span>Spotify</span>
            </a>
            {/* instagram */}
            <a href="https://www.instagram.com/pewnego.razu.zbrodnia/" className={styles.link}>
              <FaInstagram className={styles.instagramIcon}/>
              <span>Instagram</span>
            </a>
      </div>
    </div>
  );
}
