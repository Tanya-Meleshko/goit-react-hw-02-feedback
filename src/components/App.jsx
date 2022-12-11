import React, { Component } from 'react';
import FeedbackButtons from './FeedbackButtons/FeedbackButtons';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onAddFeedback = event => {
    const option = event.currentTarget.textContent;

    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  totalFeedbacks = () => {
    let total = 0;
    Object.values(this.state).forEach(element => {
      total += element;
    });
    return total;
  };

  render() {
    const feedbackNames = Object.keys(this.state);
    return (
      <div
        style={{
          height: '100%',
          padding: 30,
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackButtons
            feedbackButtons={feedbackNames}
            onLeaveFeedback={this.onAddFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.totalFeedbacks() > 0 ? (
            <Statistics state={this.state} />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
