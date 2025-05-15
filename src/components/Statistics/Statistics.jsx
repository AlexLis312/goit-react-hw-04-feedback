import React from 'react';
import './Statistics.css';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => (
  <div className="statistics">
    <p>good: {good}</p>
    <p>neutral: {neutral}</p>
    <p>bad: {bad}</p>
    <p>total: {total}</p>
    <p>positive feedback: {positivePercentage}%</p>
  </div>
);

export default Statistics;
