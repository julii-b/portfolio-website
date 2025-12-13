import styles from "./header.module.css";


export default function Header() {
  return (
    <header className={styles.header} key="headern">

      <h1 className={styles.myName}>Julius Busch</h1>

      <p className={styles.role}>Software Developer</p>

    </header>
  );
}