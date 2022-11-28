import styled from "styled-components";

export const Main = styled.main`
    padding-top: 20px;

    @media screen and (min-width: 1200px) {
        padding-top: 40px;
    }
`;

export const SearchForm = styled.form`
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
`;

export const FormInput = styled.input`
    min-width: 70%;
    height: 35px;
`;

export const FormBtn = styled.button`
    min-width: 27%;
    height: 35px;
    border: none;
`;