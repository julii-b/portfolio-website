import styles from './input.module.css';

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (<input
    {...props}
    className={props.className ? props.className + " " + styles.input : styles.input}
    />);
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (<textarea
    {...props}
    className={props.className ? props.className + " " + styles.input : styles.input}
    />);
}