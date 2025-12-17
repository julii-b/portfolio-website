import styles from "./button.module.css";
import Link, { LinkProps } from "next/link";
import React from "react";

export function Button(
  { children, ...props }: React.ComponentProps<'button'>
) {
  return (
    <button
    {...props}
    className={`${styles.container} ${props.className || ""}`}
    >
      <span className={styles.span}>
        {children}
      </span>
    </button>
  );
}

export function ButtonLink(
  { children, ...props }: React.ComponentProps<typeof Link>
) {
  return (
    <Link
    {...props}
    className={`${styles.container} ${props.className || ""}`}
    >
      <span className={styles.span}>
        {children}
      </span>
    </Link>
  );
}