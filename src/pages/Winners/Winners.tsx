import React from 'react';
import styles from './Winners.module.css';

export function Winners() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href="/garage" className={styles.header__btn}>
          to garage
        </a>
        <a href="/winners" className={styles.header__btn}>
          to winners
        </a>
      </header>
      <h2 className={styles.white}>Winners</h2>
      <h3 className={styles.white}>page 1</h3>
    </div>
  );
}
