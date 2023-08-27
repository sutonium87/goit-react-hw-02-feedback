// Import the React library to utilize its features.
import React from 'react';

// Import the CSS module for styling.
import styles from './Notification.module.css';

// Define a functional component called "Notification" which accepts a "message" prop.
const Notification = ({ message }) => {
  // Return a JSX element representing a paragraph with a class name of "notification"
  // and containing the value of the "message" prop.
  return <p className={styles.notification}>{message}</p>;
};

// Export the "Notification" component as the default export of this module.
export default Notification;

// This module defines a React functional component called "Notification".
// It takes in a prop named "message".The component renders a < p > (paragraph) element displaying the content of the "message" prop.
// The component is then exported as the default export of the module, allowing it to be used in other parts of the application.
