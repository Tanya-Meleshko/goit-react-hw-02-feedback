import React, { Component } from 'react';
import s from './Statistics.module.css';
import Notification from 'components/Notification/Notification';

class Statistics extends Component {
  countTotalFeedback = values => {
    let total = 0;
    values.forEach(value => {
      total += value;
    });
    return total;
  };

  countPositiveFeedbackPercentage = totalFeedbacks => {
    const goodFeedbacks = this.props.state['good'];
    return (goodFeedbacks * 100) / totalFeedbacks;
  };

  render() {
    const statistics = this.props.state;
    const feedbackNames = Object.keys(statistics);
    const feedbackStats = Object.values(statistics);
    const totalFeedbacks = this.countTotalFeedback(feedbackStats);
    if (totalFeedbacks !== 0) {
      return (
        <>
          {feedbackNames.map(name => (
            <p key={name} className={s.feedbackCount}>
              {`${name}: ${statistics[name]}`}
            </p>
          ))}

          <p className={s.feedbackCount}>total: {totalFeedbacks}</p>

          <p className={s.feedbackCount}>
            {`positive: ${Math.trunc(
              this.countPositiveFeedbackPercentage(totalFeedbacks)
            )}%`}
          </p>
        </>
      );
    }

    return <Notification message="There is no feedback" />;
  }
}

export default Statistics;
