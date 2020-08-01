import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = options.map(item => {
    const text = item.length > 0 ? item[0].toUpperCase() + item.slice(1) : '';

    return (
      <button
        className="FeedbackOptions__button"
        key={item}
        type="button"
        onClick={() => onLeaveFeedback(item)}
      >
        {text}
      </button>
    );
  });
  return <div>{buttons}</div>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
