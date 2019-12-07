import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Tbody({ children }) {
    return <Container>{children}</Container>;
}

Tbody.propTypes = {
    children: PropTypes.element.isRequired,
};
