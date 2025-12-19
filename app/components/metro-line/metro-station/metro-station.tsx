'use client';

import { motion } from 'motion/react';
import styles from './metro-station.module.css'

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