import React from 'react';
import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="feedback-buttons">
    {options.map(option => (
      <button key={option} name={option} onClick={onLeaveFeedback}>
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
