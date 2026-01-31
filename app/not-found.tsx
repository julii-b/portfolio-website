import styles from './not-found.module.css';
import { ButtonLink } from '@/app/ui/button/button';

export default function NotFound() {
  return (
    <section className={styles.notFoundSection}>

      <h1>Not Found</h1>
      <p>The page you are looking for does not exist. 🥲</p>

      <ButtonLink className={styles.button} href="/">Go to the home page</ButtonLink>

    </section>
  );
}