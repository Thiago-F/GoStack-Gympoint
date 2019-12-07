import styled from 'styled-components';

export const Container = styled.div`
    height: calc(100% - 80px);
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2%;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
`;

export const Title = styled.h1`
    font-size: 24px;
    color: #444444;
`;

export const ControlButton = styled.div`
    display: flex;
`;
export const Text = styled.div`
    font-size: 14px;
`;

export const Button = styled.button`
    padding: 10px 15px;
    background-color: #ee4d64;
    color: #fff;
    border: 0;
    border-radius: 4px;
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
    margin-left: 30px;
    padding: 10px;
    border: 0;
    width: 300px;
    border-radius: 4px;
`;

export const Box = styled.div`
    padding: 30px;
    border-radius: 4px;
    background-color: #fff;
`;

export const Icon = styled.div``;
