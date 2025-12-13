import Form from "next/form";
import styles from "./contact-me.module.css";


export default function ContactMe() {
  return (
    <section className={styles.section} id="contact-me" key="contact-me-section">

      <h2>Contact Me</h2>

      <Form action="/">
        <input />
        <textarea />
        <button type="submit">Send</button>
      </Form>

    </section>
  );
}