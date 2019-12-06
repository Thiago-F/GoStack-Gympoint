import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Default({ children }) {
    return (
        <Container>
            <h1>Layout</h1>
            {children}
        </Container>
    );
}

Default.propTypes = {
    children: PropTypes.element.isRequired,
};
