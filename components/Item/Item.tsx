import Image from "next/image";
import React from "react";
import { msToTime } from "../../util/lib";
import styles from "./Item.module.css";
import { HiCalendar, HiClock } from "react-icons/hi";

interface Props {
  episode: {
    id: string;
    name: string;
    description: string;
    thumbnail: string;
    url: string;
    duration: number;
    durationAsString: string;
    publishedAt: string;
    images: Array<{ url: string }>;
    duration_ms: number;
    release_date: string;
    external_urls: { spotify: string };
  };
}
export default function Item({ episode }: Props): JSX.Element {
  console.log(episode);
  return (
    <div className={styles.container}>
        <img
          src={episode.images[0].url}
          alt={episode.name}
          width={300}
          height={300}
        />
      <div className={styles.info}>
        <div className={styles.time}>
          <span className={styles.timeItem}>
            {" "}
            <HiCalendar />
            {episode.release_date}
          </span>
          <span className={styles.timeItem}>
            {" "}
            <HiClock /> {msToTime(episode.duration_ms)}
          </span>
        </div>
        <a href={episode.external_urls.spotify}>
          <h2>{episode.name}</h2>
        </a>
        <p>{episode.description}</p>
      </div>
    </div>
  );
}
