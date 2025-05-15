import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

import './App.css';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  update = event => {
    const { name } = event.currentTarget;

    return this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? Math.round((this.state.good / total) * 100) : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = ['good', 'neutral', 'bad'];

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.update} />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
