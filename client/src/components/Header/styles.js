import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    background-color: #ffffff;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;

    svg {
        padding-right: 30px;
        margin-right: 10px;
        border-right: 1px solid #dddddd;
        width: 150px;
    }
`;

export const Navigation = styled.div`
    padding: 0 30px;
    display: flex;
    align-items: center;

    /* a {
    } */
`;

export const NavItem = styled(Link)`
    padding: 10px;
    text-decoration: none;
    color: #333;
    margin-left: 10px;

    &:hover {
        text-decoration: underline;
    }

    &:first() {
        margin-left: 20px;
    }
`;

export const ProfileSection = styled.div`
    text-align: right;
`;

export const Text = styled.div`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
`;

export const Logout = styled(Link)`
    font-size: 14px;
    color: #de3b3b;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;
