import styles from "./button.module.css";
import Link, { LinkProps } from "next/link";
import React from "react";


/**
 * Custom button component. Wraps <button>
 */
export function Button(
  { children, ...props }: React.ComponentProps<'button'>
) {
  return (
    <button
    {...props}
    className={`${styles.button} ${props.className || ""}`}
    >
      {children}
    </button>
  );
}


/**
 * Custom button-like component for links. Wraps <Link>
 */
export function ButtonLink(
  { children, ...props }: React.ComponentProps<typeof Link>
) {
  return (
    <Link
    {...props}
    className={`${styles.button} ${props.className || ""}`}
    >
      {children}
    </Link>
  );
}