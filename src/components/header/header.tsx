import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <img src="../../../logo.png" alt="logo" />
      <h1>HomeClick!</h1>
      <p>Facility servicies</p>
    </header>
  );
}
