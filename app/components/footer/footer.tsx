import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <Link
      href="https://www.linkedin.com/in/buschjulius/"
      target='_blank'
      rel='noopener noreferrer'
      >
        LinkedIn
      </Link>
      
      <Link
      href="https://github.com/julii-b"
      target='_blank'
      rel='noopener noreferrer'
      >
        GitHub
      </Link>
      
      <Link href="/privacy-policy">
        Privacy Policy
      </Link>
      
    </footer>
  );
}