import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Thead({ children }) {
    return <Container>{children}</Container>;
}

Thead.propTypes = {
    children: PropTypes.element.isRequired,
};
