import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

import './App.css';

const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = state;
  const options = ['good', 'neutral', 'bad'];
  const total = good + neutral + bad;
  const positiveFeedbackPercentage =
    total > 0 ? Math.round((good / total) * 100) : 0;

  const update = event => {
    const { name } = event.currentTarget;
    setState(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={update} />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
