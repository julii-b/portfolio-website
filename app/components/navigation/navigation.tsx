import styles from "./navigation.module.css";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link href="/#projects">Projects</Link>
      <Link href="/#education">Education</Link>
      <Link href="/#work-experience">Work Experience</Link>
      <Link href="/#languages">Languages</Link>
      <Link href="/#contact-me">Contact Me</Link>
    </nav>
  );
}