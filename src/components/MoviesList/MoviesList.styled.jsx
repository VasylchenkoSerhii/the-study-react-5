import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
    @media screen and (min-width: 320px) {
        display: flex;
        flex-wrap: wrap;
        max-width: 300px;
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
    border-bottom: ${p => p.theme.borders.bold};
    color: ${p => p.theme.colors.text};
    border-color: #9202d4;
    transition: transform 250ms linear,
    background-color 250ms linear,
    border-radius 250ms linear,
    color 250ms linear;

    &:hover,
    &:focus {
        transform: scale(1.1);
        color: ${p => p.theme.colors.white};
        background-color: #b938f4;
        border-radius: ${p => p.theme.radii.normal};
    }

    @media screen and (max-width: 767px) {
        &:not(:last-child) {
            margin-bottom: 30px;
        }
    }

`;

export const Link = styled(NavLink)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Title = styled.p`
    display: flex;
    justify-content: center;
    max-width: 200px;
    margin-bottom: ${p => `${p.theme.space[4]}px`};
    margin-top: ${p => `${p.theme.space[4]}px`};
    padding: 5px;
    text-align: center;
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${P => P.theme.fontWeights.bold};

`;
