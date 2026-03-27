import { Button } from "react-bootstrap";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Food Tourism Malawi</h1>
        <p className={styles.subtitle}>
          Explore the flavors, markets, and traditions that make Malawi's cuisine unique.
        </p>
        <Button
          variant="success"
          size="lg"
          href="/destinations"
          className={styles.button}
        >
          Discover Destinations
        </Button>
      </div>
    </section>
  );
}