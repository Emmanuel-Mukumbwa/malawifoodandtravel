import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container d-flex justify-content-between align-items-center">
        <Link href="/" className={styles.logo}>
          <span>Food</span><span>Tourism</span> Malawi
        </Link>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/destinations" className={styles.navLink}>
                Destinations
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.navLink}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}