import styled from "styled-components";

export const List = styled.ul`
    @media screen and (min-width: 320px) {
        display: flex;
        flex-wrap: wrap;
        max-width: 300px;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 768px) {
        max-width: 620px;
        row-gap: 30px;
        column-gap: 20px
    }

    @media screen and (min-width: 1200px) {
        max-width: 940px;
    }
`;

export const ListItem = styled.li`
    max-width: 300px;
    color: ${p => p.theme.colors.text};

    @media screen and (max-width: 767px) {
        &:not(:last-child) {
            margin-bottom: 30px;
        }
    }
`;

export const Wrapper = styled.div`
    max-width: 200px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: ${p => `${p.theme.space[4]}px`};
    margin-top: ${p => `${p.theme.space[4]}px`};
    padding: 5px;
    text-align: center;
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${P => P.theme.fontWeights.bold};
`;