import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Th({ children }) {
    return <Container>{children}</Container>;
}

Th.propTypes = {
    children: PropTypes.element.isRequired,
};
