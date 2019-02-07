import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  iconClassName: PropTypes.string.isRequired,
};

export const Icon = ({ iconClassName }) => <i className={iconClassName} aria-hidden="true" />;

Icon.propTypes = propTypes;
