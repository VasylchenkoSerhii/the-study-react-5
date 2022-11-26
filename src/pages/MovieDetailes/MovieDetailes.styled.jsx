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
        color: ${p => p.theme.colors.accentHeaderLink};
    }
`;