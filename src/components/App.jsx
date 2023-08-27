// Import necessary modules from the 'react' library and local components
import React, { Component } from 'react';
import Statistics from './Statistics/Statistics'; // Import the Statistics component
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'; // Import the FeedbackOptions component
import Section from './Section/Section'; // Import the Section component
import Notification from './Notification/Notification'; // Import the Notification component

// Define the main App component
class App extends Component {
  // Initialize the state to keep track of feedback counts
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  // Function to handle feedback based on the feedback type
  handleFeedback = feedbackType => {
    // Update the state using the previous state
    // When you provide a function as an argument to React's setState method,
    //  React automatically passes the previous state(prevState) to that function as its argument.
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  // Render method to create the user interface
  render() {
    // The values of these properties from the state object are assigned to variables with the same names (good, neutral, and bad).
    const { Good, Neutral, Bad } = this.state;

    // Calculate total feedback and positive feedback percentage
    const totalFeedback = Good + Neutral + Bad;
    const positivePercentage = (Good / totalFeedback) * 100;

    return (
      <div>
        {/* Section to leave feedback */}
        <Section title="Please leave feedback">
          <FeedbackOptions
            // This expression uses the Object.keys() method to extract an array of property names (keys) from the this.state object.
            // In other words, it retrieves an array containing the keys "good", "neutral", and "bad".
            options={Object.keys(this.state)} // Pass available feedback options
            onLeaveFeedback={this.handleFeedback} // Pass the feedback handler function
          />
        </Section>

        {/* Section to display statistics */}
        <Section title="Statistics">
          {totalFeedback === 0 ? (
            // Display a notification if no feedback has been given
            <Notification message="There is no feedback" />
          ) : (
            // Display statistics using the Statistics component
            <Statistics
              good={Good}
              neutral={Neutral}
              bad={Bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

// Export the App component as the default export
export default App;
