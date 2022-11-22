import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
    font-size: ${p => p.theme.fontSizes.l};

    &:not(:first-child) {
        margin-left: ${p => `${p.theme.space[4]}px`};
    }
`;