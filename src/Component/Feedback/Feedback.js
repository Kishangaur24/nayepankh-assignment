import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the feedback to your backend or perform actions with it
    console.log('Feedback submitted:', feedback);
    // You can implement an API call here to send the feedback data to the server
    // For simplicity, logging the feedback to the console in this example
    setFeedback(''); // Clear the feedback input after submission
  };

  return (
    <div>
      <h2>Provide Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Enter your feedback..."
          rows={4}
          cols={50}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
