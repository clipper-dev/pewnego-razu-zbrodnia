import styles from "../styles/Home.module.css";
import { getEpisodes, getAccessToken } from "../util/lib";
import Navbar from "../components/Navbar/Navbar";
import Item from "../components/Item/Item";
import Hero from "../components/Hero/Hero"
interface Episode {
    id: string,
    name: string,
    description: string,
    thumbnail: string,
    url: string,
    duration: number,
    durationAsString: string,
    publishedAt: string,
    images: Array<{url: string}>,
    duration_ms: number,
    release_date: string;    
    external_urls: { spotify: string };
  }

export default async function Home() {
  const accessToken = await getAccessToken();
  const episodes = await getEpisodes(accessToken);
  return (
    <div className={styles.container}>
      <Navbar />

      <Hero />
      
      <div className={styles.episodes}>
        {episodes.map((episode: Episode) => (
          <Item key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
}
