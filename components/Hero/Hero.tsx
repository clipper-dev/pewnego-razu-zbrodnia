import React from "react";
import styles from "./Hero.module.css";
import { FaSpotify, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <h1>Pewnego Razu Zbrodnia</h1>
        <img src="/res/oliwia.jpg" alt="Oliwia" />
        <span className={styles.name}>Oliwia</span>
        <span className={styles.host}>Host</span>
      </div>
      <div className={styles.description}>
        <img src="/res/cover.png" alt="cover" />
        <div>
          <p>
            Podcast{" "}
            <span className={styles.highlight}>Pewnego Razu Zbrodnia</span> to
            intrygujące i wciągające audycje, które przybliżają słuchaczom
            najbardziej nieznane i tajemnicze zbrodnie z historii. Każdy odcinek
            skupia się na innym przestępstwie, a prezenterzy przedstawiają
            fakty, analizują dowody i rozważają różne hipotezy dotyczące tego,
            co mogło się wydarzyć.
          </p>
          <p>
            Jeśli lubisz historie kryminalne i chcesz poznać prawdziwe historie
            o zbrodniach, które zapadną ci w pamięci, ten podcast jest dla
            ciebie idealnym wyborem. Wciągnie cię w swoje opowieści i pozwoli
            zrozumieć złożoność ludzkich motywacji i działań.
          </p>
          <div className={styles.links}>
            <a href="https://open.spotify.com/show/3WNL9lM9zyI79CsxN5xwe1" className={styles.spotify}>
              <FaSpotify className={styles.spotifyIcon}/>
              <span>Spotify</span>
            </a>
            {/* instagram */}
            <a href="https://www.instagram.com/pewnego.razu.zbrodnia/" className={styles.instagram}>
              <FaInstagram className={styles.instagramIcon}/>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
