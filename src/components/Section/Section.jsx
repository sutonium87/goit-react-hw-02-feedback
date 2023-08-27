// Import the React library to use its features.
import React from 'react';

// Import the CSS module for styling.
import styles from './Section.module.css';

// Define a functional component named "Section" that takes in two props: "title" and "children".
const Section = ({ title, children }) => {
  // Return JSX (JavaScript XML) representing the structure of the component.
  return (
    <div className={styles['section-container']}>
      {/* Render the "title" prop as an <h2> heading */}
      <h2 className={styles['section-title']}>{title}</h2>
      {/* Render the content passed as the "children" prop */}
      {children}
    </div>
  );
};

// Export the "Section" component as the default export of this module.
export default Section;

// This module defines a React functional component called "Section".
//  It takes in two props: "title"(used for the heading) and "children"(used for the content inside the section).
// The component renders an enclosing < div > element that contains an < h2 > element displaying the provided "title", and it also renders the content passed as "children".
// The component is then exported as the default export of the module, making it available for use in other parts of the application.
