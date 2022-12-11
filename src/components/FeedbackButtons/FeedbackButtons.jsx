import React, { Component } from 'react';
import s from './FeedbackButtons.module.css';
import PropTypes from 'prop-types';




class FeedbackButtons extends Component {
  render() {
    const feedbackButtons = this.props.feedbackButtons;
    const addFeedback = this.props.onLeaveFeedback;

    return (
      <>
        {feedbackButtons.map(button => (
          <button
            type="button"
            onClick={addFeedback}
            key={button}
            className={s.feedbackButton}
          >
            {button}
          </button>
        ))}
      </>
    );
  }
}

FeedbackButtons.propTypes = {
  feedbackButtons: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackButtons;
