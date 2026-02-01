import styles from './input.module.css';


/**
 * Wrapper around <input> element with default styling.
 * @param props
 */
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (<input
    {...props}
    className={props.className ? props.className + " " + styles.input : styles.input}
    />);
}

/** Wrapper around <textarea> element with default styling.
 * @param props
 */
export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (<textarea
    {...props}
    className={props.className ? props.className + " " + styles.textarea : styles.textarea}
    />);
}