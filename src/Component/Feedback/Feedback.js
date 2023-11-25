import React, { useState } from 'react';
import style from "./Feedback.module.css"
const FeedbackForm = () => {
  const [feedback, setFeedback] = useState([]);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the feedback
    if(feedback===""){
       alert("Please first provide feedback somethin")
    }else{
    localStorage.setItem("feedback",JSON.stringify(feedback))
    console.log('Feedback submitted:', feedback);
    setFeedback(''); 
    alert("Thankyou for your review ")
    }
  };

  return (
    <div className={style.main}>
      <h2>Provide Feedback</h2>
      <form onSubmit={handleSubmit} className={style.form}>
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
