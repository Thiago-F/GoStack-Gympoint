import styled from 'styled-components';

export const Container = styled.div`
    background-color: #ee4d64;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginBox = styled.div`
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    padding: 50px 30px;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-items: center;

    svg {
        margin: 0 auto;
        margin-bottom: 15px;
    }

    form {
        display: flex;
        flex-direction: column;
    }
`;

export const Section = styled.label`
    margin-bottom: 15px;

    input {
        width: 100%;
        border: 1px solid #dddddd;
        padding: 10px;
        border-radius: 4px;
    }
`;
export const Button = styled.button`
    padding: 15px;
    color: #fff;
    background-color: #ee4d64;
    border: 0;
    border-radius: 4px;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 14px;
`;
