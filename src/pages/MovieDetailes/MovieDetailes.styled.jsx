import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
    display: flex;
    align-items: center;
    max-width: 125px;
    margin-bottom: ${p => `${p.theme.space[3]}px`};
    padding: ${p => `${p.theme.space[3]}px`};
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    border-radius: ${p => p.theme.radii.normal} ;
    color: ${p => p.theme.colors.text} ;
    transition: background-color 250ms linear,
    color 250ms linear;

    &:hover,
    &:focus {
        background-color: ${p => p.theme.colors.accent};
        color: ${p => p.theme.colors.white};
    }

    @media screen and (min-width: 1200px) {
        margin-bottom: ${p => `${p.theme.space[4]}px`};
    }
`;


export const WripperCard = styled.div`
    margin-bottom: ${p => `${p.theme.space[3]}px`};
    color: ${p => p.theme.colors.text};
    background-color: ${p => p.theme.colors.lightAccent};
    border-bottom: 2px solid rgba(0, 0, 0,0.48);
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0,0.48);

    @media screen and (max-width: 767px) {
        width: 300px;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        margin-bottom: ${p => `${p.theme.space[4]}px`};
    }
`;


export const WripperDescription = styled.div`
    padding: ${p => `${p.theme.space[3]}px`};
    font-size: ${p => p.theme.fontSizes.m};

    @media screen and (min-width: 768px) {
        padding: ${p => `${p.theme.space[5]}px`};
    }

    @media screen and (min-width: 1200px) {
        font-size: ${p => p.theme.fontSizes.l};
    }
`;


export const TitleMovie = styled.h2`
    margin-bottom: ${p => `${p.theme.space[3]}px`};

    @media screen and (min-width: 1200px) {
        margin-bottom: ${p => `${p.theme.space[4]}px`};
    }
`;

export const Grade = styled.p`
    margin-bottom: ${p => `${p.theme.space[3]}px`};

    @media screen and (min-width: 1200px) {
        margin-bottom: ${p => `${p.theme.space[4]}px`};
    }
`;


export const GradeAccent = styled.span`
    font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Title = styled.h3`
    margin-bottom: ${p => `${p.theme.space[3]}px`};

    @media screen and (min-width: 1200px) {
        margin-bottom: ${p => `${p.theme.space[4]}px`};
    }
`;


export const Overview = styled.p`
    margin-bottom: ${p => `${p.theme.space[3]}px`};

    @media screen and (min-width: 1200px) {
        margin-bottom: ${p => `${p.theme.space[4]}px`};
    }
`;

export const AdditionalInformation = styled.div`
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.text};

    @media screen and (min-width: 1200px) {
        font-size: ${p => p.theme.fontSizes.l};
    }
`;

export const AdditionalTitle = styled.h3`
    margin-bottom: ${p => `${p.theme.space[5]}px`};
    text-align: center;

    @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes.l};
    }

    @media screen and (min-width: 1200px) {
        margin-bottom: ${p => `${p.theme.space[4]}px`};
    }
`;

export const LinkInformation = styled(NavLink)`
    max-width: 125px;
    margin-bottom: ${p => `${p.theme.space[3]}px`};
    padding: ${p => `${p.theme.space[3]}px`};
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    border-radius: ${p => p.theme.radii.normal} ;
    color: ${p => p.theme.colors.text} ;
    transition: background-color 250ms linear,
    color 250ms linear;

    &:hover,
    &:focus {
        background-color: ${p => p.theme.colors.accent};
        color: ${p => p.theme.colors.white};
    }
`;
