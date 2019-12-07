import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Content,
    Header,
    Title,
    ControlButton,
    Button,
    Input,
    Box,
    Text,
} from './styles';

const PageLayout = ({ title, button, icon, handle, children }) => {
    return (
        <Container>
            <Content>
                <Header>
                    <Title>{title}</Title>
                    <ControlButton>
                        <Button>
                            {icon}
                            <Text>{button}</Text>
                        </Button>
                        <Input onChange={handle} placeholder="Buscar aluno" />
                    </ControlButton>
                </Header>
                <Box>{children}</Box>
            </Content>
        </Container>
    );
};

export default PageLayout;

PageLayout.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    button: PropTypes.string.isRequired,
    handle: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
};
