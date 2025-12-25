'use client';

import { motion } from 'motion/react';
import styles from './metro-station.module.css'


/**
 * Metro station component to be used as a decorative element with the metro line component.
 * Wrap this component in a div to control position. e.g. padding-left: -4em if the metro line is 4em on the left side. 
 */
export default function MetroStation() {
  return (
    <motion.div
      initial={{ opacity: 1, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.001 }}
      transition={{ type: "tween", duration: 1 }}

      className={styles.wrapper}
      >
      <div className={styles.metroStation} />
    </motion.div>
  );
}