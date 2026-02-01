import styles from "./button.module.css";
import Link, { LinkProps } from "next/link";
import React from "react";


/**
 * Custom button component. Wraps <button>
 */
export function Button(
  { children, loading, ...props }: React.ComponentProps<'button'> & { loading?: boolean }
) {
  return (
    <>{loading ? (
      <button
      {...props}
      className={`${styles.button} ${props.className || ""}`}
      disabled
      >
        <span className={styles.hidden} aria-hidden="true">{children}</span>

        <div className={styles.loadingDots}>
          <div className={styles.loadingDot1}></div>
          <div className={styles.loadingDot2}></div>
          <div className={styles.loadingDot3}></div>
        </div>
      </button>
    ) : (
      <button
      {...props}
      className={`${styles.button} ${props.className || ""}`}
      >
        {children}
      </button>
    )}</>
  );
}


/**
 * Custom button-like component for links. Wraps <Link>
 */
export function ButtonLink(
  { children, loading, ...props }: React.ComponentProps<typeof Link> & { loading?: boolean }  
) {
  return (
    <>{loading ? (
      <Link
      {...props}
      className={`${styles.button} ${styles.disabled} ${props.className || ""}`}
      aria-disabled="true"
      >
        <span className={styles.hidden} aria-hidden="true">{children}</span>

        <div className={styles.loadingDots}>
          <div className={styles.loadingDot1}></div>
          <div className={styles.loadingDot2}></div>
          <div className={styles.loadingDot3}></div>
        </div>
      </Link>
    ) : (
      <Link
      {...props}
      className={`${styles.button} ${props.className || ""}`}
      >
        {children}
      </Link>
    )}</>
  );
}