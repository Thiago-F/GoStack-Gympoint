/* eslint-disable no-console */
import React from 'react';

import { IoIosAdd } from 'react-icons/io';

import PageLayout from '../../_layouts/page';
import {
    Table,
    Tbody,
    Thead,
    Row,
    Column,
    Th,
} from '../../../components/Table';

import { Container } from './styles';

export default function list() {
    function handleInput(e) {
        console.log('input dentro do list', e.target.value);
    }

    return (
        <Container>
            <PageLayout
                title="Gerenciamento de estudantes"
                button="Cadastrar"
                icon={<IoIosAdd size={22} />}
                handle={handleInput}
            >
                <Table>
                    <Thead>
                        <Row>
                            <Th>NOME</Th>
                            <Th>E-MAIL</Th>
                            <Th>IDADE</Th>
                            <Th />
                            <Th />
                        </Row>
                    </Thead>
                    <Tbody>
                        <Row>
                            <Column>Thiago Fialho</Column>
                            <Column>thiago_fialho@hotmail.com</Column>
                            <Column>20</Column>
                            <Column>Editar</Column>
                            <Column>Apagar</Column>
                        </Row>
                    </Tbody>
                </Table>
            </PageLayout>
        </Container>
    );
}
