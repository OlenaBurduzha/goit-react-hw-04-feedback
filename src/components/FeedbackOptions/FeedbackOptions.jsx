import shortid from 'shortid';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map(option => (
                <button
                    className={styles.optionBtn}
                    key={shortid.generate()}
                    type="button"
                    name={option}
                    onClick={()=> onLeaveFeedback(option)}>
                    {option}
                </button>
            ))}
        </>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;