import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Header from '../../../components/Header';

export default function Default({ children }) {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    );
}

Default.propTypes = {
    children: PropTypes.element.isRequired,
};
