import styled from "styled-components";

export const List = styled.ul`
    @media screen and (min-width: 320px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 320px;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 768px) {
        max-width: 768px;
        row-gap: 10px;
        column-gap: 10px
    }

    @media screen and (min-width: 1200px) {
        max-width: 1200px;
    }
`;

export const Title = styled.p`
    max-width: 200px;
    margin-bottom: ${p => `${p.theme.space[4]}px`};
    margin-top: ${p => `${p.theme.space[4]}px`};
    padding: 5px;
    text-align: center;
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${P => P.theme.fontWeights.bold}
`;
