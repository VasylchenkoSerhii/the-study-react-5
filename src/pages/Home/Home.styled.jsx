import styled from "styled-components";

export const Main = styled.main`
    padding-top: 20px;

    @media screen and (min-width: 1200px) {
        padding-top: 40px;
    }

`;

export const Title = styled.h1`
    @media screen and (min-width: 320px) {
        margin-bottom: 20px;
        text-align: center;
        font-size: ${p => p.theme.fontSizes.l};
        color: ${p => p.theme.colors.text}
    }

    @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes.xl};
    }

    @media screen and (min-width: 1200px) {
        font-size: ${p => p.theme.fontSizes.xxl};
    }
    
`;
