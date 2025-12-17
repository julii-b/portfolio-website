'use client';

import Card from '@/app/ui/card/card';
import { Button } from '@/app/ui/button';
import { ReactElement, RefObject, useEffect, useRef, useState } from 'react';
import { JSX } from 'react';
import styles from './cards-carousel.module.css';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'motion/react';

export default function CardsCarousel (
  {children}: {children: ReactElement<typeof Card> | ReactElement<typeof Card>[]}
): JSX.Element {

  const cards = Array.isArray(children) ? children : [children];
  const cardsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);

  function scrollToCard(i: number) {
    const el = cardsRefs.current[i];
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  return (
    <motion.div
    className={styles.carouselWrapper}
    initial={{ y: 20, opacity: 1 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ amount: 0.7 }}
    transition={{ type: "tween", duration: 0.5 }}
    >

      {/* Scroll left button: */}
      {currentCardIndex > 0 && (
        <div className={styles.leftButtonWrapper}>
          <Button
            className={styles.leftButton}
            onClick={() => { scrollToCard(Math.max(currentCardIndex - 1, 0)) }}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </Button>
        </div>
      )}

      <div
      className={styles.cardsCarousel}
      onScroll={(e) => {
        const el = e.currentTarget;
        // calculate current card index based on scroll position:
        // (scroll position from the left) / ((total width) - (unscrollable visible width))
        const progress = el.scrollLeft / (el.scrollWidth - el.clientWidth);
        // map progress (0..1) to card index (0..cards.length-1)
        const i = Math.round(progress * (cards.length - 1));
        setCurrentCardIndex(i);
      }}
      >
        
        {/* Cards: */}
        {cards.map((card, index) => {
          return (
            <motion.div
            initial={{ opacity: 0.3, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.7 }}
            transition={{ type: "tween", duration: 0.5 }}

            key={index}
            ref={(el) => {cardsRefs.current[index] = el}}
            className={styles.cardWrapper}
            >
              {card}
            </motion.div>
          );
        })}
        
      </div>

      {/* Scroll right button: */}
      {currentCardIndex < cards.length - 1 && (
        <div className={styles.rightButtonWrapper}>
          <Button
            className={styles.rightButton}
            onClick={() => { scrollToCard(Math.min(currentCardIndex + 1, cards.length - 1)) }}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
        </div>
      )}
      
    </motion.div>
  );
}