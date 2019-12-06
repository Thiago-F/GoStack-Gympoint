import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { ReactComponent as Icon } from '../../assets/icons/icon.svg';

import { Container, LoginBox, Button, Label, Section } from './styles';

const SignIn = () => {
    function handleSubmit(data) {
        // eslint-disable-next-line no-console
        console.log(data);
    }

    return (
        <Container>
            <LoginBox>
                <Icon />
                <Form onSubmit={handleSubmit}>
                    <Section>
                        <Label>SEU E-MAIL</Label>
                        <Input
                            name="email"
                            id="email"
                            placeholder="exemplo@email.com"
                        />
                    </Section>
                    <Section>
                        <Label>SUA SENHA</Label>
                        <Input
                            name="password"
                            type="password"
                            placeholder="**************"
                        />
                    </Section>
                    <Button type="submit">Acessar</Button>
                </Form>
            </LoginBox>
        </Container>
    );
};

export default SignIn;
