import React, { Component } from 'react';
import FeedbackButtons from './FeedbackButtons/FeedbackButtons';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

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
          <Statistics state={this.state} />
        </Section>
      </div>
    );
  }
}
