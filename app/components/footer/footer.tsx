import Link from 'next/link';
import styles from './footer.module.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <Link
      href="https://www.linkedin.com/in/buschjulius/"
      target='_blank'
      rel='noopener noreferrer'
      >
        <FontAwesomeIcon icon={faLinkedin} />
        LinkedIn
      </Link>
      
      <Link
      href="https://github.com/julii-b"
      target='_blank'
      rel='noopener noreferrer'
      >
        <FontAwesomeIcon icon={faGithub} />
        GitHub
      </Link>
      
      <Link href="/privacy-policy">
        Privacy Policy
      </Link>
      
    </footer>
  );
}