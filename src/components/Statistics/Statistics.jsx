import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({ state }) => {
  const countTotalFeedback = values => {
    let total = 0;
    values.forEach(value => {
      total += value;
    });
    return total;
  };

  const countPositiveFeedbackPercentage = totalFeedbacks => {
    const goodFeedbacks = state['good'];
    return (goodFeedbacks * 100) / totalFeedbacks;
  };
  const feedbackNames = Object.keys(state);
  const feedbackStats = Object.values(state);
  const totalFeedbacks = countTotalFeedback(feedbackStats);

  return (
    <>
      {feedbackNames.map(name => (
        <p key={name} className={s.feedbackCount}>
          {`${name}: ${state[name]}`}
        </p>
      ))}
      <p className={s.feedbackCount}>total: {totalFeedbacks}</p>
      <p className={s.feedbackCount}>
        {`positive: ${Math.trunc(
          countPositiveFeedbackPercentage(totalFeedbacks)
        )}%`}
      </p>
    </>
  );
};

export default Statistics;
