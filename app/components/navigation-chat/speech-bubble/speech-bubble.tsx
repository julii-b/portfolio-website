import styles from './speech-bubble.module.css';

export default function SpeechBubble(
  {
    errorMessages, modelAnswer, loadingState
  }: {
    modelAnswer: string,
    errorMessages: string,
    loadingState: "loading" | "idle"
  }) {
  return (
    <div className={styles.speechBubble}>
      <div className={styles.chatOutput}>
        {loadingState === "idle" ? (
          <>
            {errorMessages ? (
              <>{errorMessages}</>
            ) : (
              <>{modelAnswer}</>
            )}
          </>
        ) : (
          <div className={styles.loadingAnimationWrapper}>
            <div className={styles.loadingDot1}></div>
            <div className={styles.loadingDot2}></div>
            <div className={styles.loadingDot3}></div>
          </div>
        )}
      </div>
    </div>
  );
}