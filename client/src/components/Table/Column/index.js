import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Column({ children }) {
    return <Container>{children}</Container>;
}

Column.propTypes = {
    children: PropTypes.element.isRequired,
};
