import React from 'react';

import { ReactComponent as Icon } from '../../assets/icons/icon-land.svg';
import {
    Container,
    Content,
    Navigation,
    NavItem,
    ProfileSection,
    Text,
    Logout,
} from './styles';

export default function Header() {
    return (
        <Container>
            <Content>
                <Navigation>
                    <Icon />
                    <NavItem to="/asdfasdf">ALUNOS</NavItem>
                    <NavItem to="/">PLANOS</NavItem>
                    <NavItem to="/">MATRÍCULAS</NavItem>
                    <NavItem to="/">PEDIDOS DE AUXÍLIO</NavItem>
                </Navigation>
                <ProfileSection>
                    <Text>Thiago Fialho</Text>
                    <Logout>Sair do sistema</Logout>
                </ProfileSection>
            </Content>
        </Container>
    );
}
