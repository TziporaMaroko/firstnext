import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="/jewelry" className={styles.navLink}>Jewelry</a>
        </li>
        <li className={styles.navItem}>
          <a href="/bags" className={styles.navLink}>Bags</a>
        </li>
      </ul>
    </nav>
  );
}
