import PropTypes from 'prop-types';
import React from 'react';
import styles from './Section.module.css';

const Section = ({ title, children }) => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </section>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired
};

export default Section;