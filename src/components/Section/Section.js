import React from 'react';
import PropTypes from 'prop-types';
import './Section.scss';

const Section = ({ title, children }) => (
  <section className="Section">
    <h3 className="Section__title">{title}</h3>
    {children}
  </section>
);

Section.defaultProps = {
  children: '',
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
