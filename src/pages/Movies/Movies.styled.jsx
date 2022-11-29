import styled from "styled-components";

export const Main = styled.main`
    padding-top: 20px;

    @media screen and (min-width: 1200px) {
        padding-top: 40px;
    }
`;

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    max-width: 320px;
    height: 40px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 768px) {
        max-width: 400px;
    }

    @media screen and (min-width: 768px) {
        max-width: 600px;
    }
`;

export const FormInput = styled.input`
    min-width: 70%;
    height: 40px;
    outline: none;
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.text};
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.lightAccent};
    transition: border-color 250ms linear;

    &:focus {
        border-color: ${p => p.theme.colors.accent};
    }

    @media screen and (min-width: 768px) {
        min-width: 80%;
    }
`;

export const FormBtn = styled.button`
    display: inline-block;
    min-width: 30%;
    height: 100%;
    border: none;
    color: ${p => p.theme.colors.text};
    background-color: ${p => p.theme.colors.lightAccent};
    transition: color 250ms linear, background-color 250ms linear;

    &:hover,
    &:focus {
        color: ${p => p.theme.colors.white};
        background-color: ${p => p.theme.colors.accent};
    }

    @media screen and (min-width: 768px) {
        min-width: 20%;
    }
`;