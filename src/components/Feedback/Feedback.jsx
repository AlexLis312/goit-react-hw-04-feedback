import React, { Component } from 'react';

class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0, total: 0 };

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
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button name="good" onClick={this.update}>
          good
        </button>
        <button name="neutral" onClick={this.update}>
          neutral
        </button>
        <button name="bad" onClick={this.update}>
          bad
        </button>

        <h2>Statistics</h2>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>total: {total}</p>
        <p>positive feedback: {positivePercentage}%</p>
      </div>
    );
  }
}

export default Feedback;
