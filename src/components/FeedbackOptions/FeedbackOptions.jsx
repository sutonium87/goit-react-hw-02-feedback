// Import the React library
import React from 'react';

// Import the CSS module for styling.
import styles from './FeedbackOptions.module.css';

// Define a functional component called FeedbackOptions
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // Render the component's UI
  return (
    // Use a div with a class name to style the container of the feedback buttons
    <div className={styles['feedback-options-container']}>
      {/* Map over each feedback option */}
      {options.map(option => (
        // Create a button for each option
        <button
          key={option} // Use the option value as a unique key
          className={styles['feedback-button']} // Apply styling from the CSS module
          onClick={() => onLeaveFeedback(option)} // Trigger the provided callback with the chosen option
        >
          {/* Display the text of the option */}
          {option}
        </button>
      ))}
    </div>
  );
};

// Export the FeedbackOptions component as the default export
export default FeedbackOptions;

// This module defines a functional component called FeedbackOptions that dynamically renders buttons for each feedback option passed as props.
// When a button is clicked, it triggers the onLeaveFeedback callback function with the corresponding option value.
