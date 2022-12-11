import s from './FeedbackButtons.module.css';
import PropTypes from 'prop-types';

const FeedbackButtons = ({ feedbackButtons, onLeaveFeedback }) => {
  return (
    <>
      {feedbackButtons.map(button => (
        <button
          type="button"
          onClick={onLeaveFeedback}
          key={button}
          className={s.feedbackButton}
        >
          {button}
        </button>
      ))}
    </>
  );
};

FeedbackButtons.propTypes = {
  feedbackButtons: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackButtons;
