import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
    font-family: ${p => p.theme.fonts.monospace};
    font-size: ${p => p.theme.fontSizes.l};
    color: ${p => p.theme.colors.headerLink};
    transition: transform 250ms linear, color 250ms linear;

    &:hover,
    &:focus {
        transform: scale(1.1);
        color: ${p => p.theme.colors.accentHeaderLink}
    }

    &:not(:first-child) {
        margin-left: ${p => `${p.theme.space[4]}px`};
    }
`;