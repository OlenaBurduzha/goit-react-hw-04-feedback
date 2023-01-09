import PropTypes from 'prop-types';
import React from 'react';
import styles from './Notification.module.css';

const Notification = ({ message }) => {
    return (
        <>
            <p className={styles.message}>{message}</p>
        </>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired
};

export default Notification;