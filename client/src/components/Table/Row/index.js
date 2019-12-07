import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Row({ children }) {
    return <Container>{children}</Container>;
}

Row.propTypes = {
    children: PropTypes.element.isRequired,
};
