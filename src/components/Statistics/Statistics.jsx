// Import the React library
import React from 'react';

// Import the CSS module for styling.
import styles from './Statistics.module.css';

// Define a functional component called Statistics
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  // Render the component's UI
  return (
    <div className={styles['statistics-container']}>
      {/* Display the count of good feedback */}
      <p className={styles['statistics-item']}>
        <span className={styles['statistics-label']}>Good:</span>
        <span className={styles['statistics-value']}>{good}</span>
      </p>
      {/* Display the count of neutral feedback */}
      <p className={styles['statistics-item']}>
        <span className={styles['statistics-label']}>Neutral:</span>
        <span className={styles['statistics-value']}>{neutral}</span>
      </p>
      {/* Display the count of bad feedback */}
      <p className={styles['statistics-item']}>
        <span className={styles['statistics-label']}>Bad:</span>
        <span className={styles['statistics-value']}>{bad}</span>
      </p>
      {/* Display the total count of all feedback */}
      <p className={styles['statistics-item']}>
        <span className={styles['statistics-label']}>Total:</span>
        <span className={styles['statistics-value']}>{total}</span>
      </p>
      {/* Display the percentage of positive feedback */}
      <p
        className={`${styles['statistics-item']} ${styles['positive-feedback']}`}
      >
        <span className={styles['statistics-label']}>Positive Feedback:</span>
        <span className={styles['statistics-value']}>
          {positivePercentage.toFixed(2)}%
        </span>
      </p>
    </div>
  );
};

// Export the Statistics component as the default export
export default Statistics;
