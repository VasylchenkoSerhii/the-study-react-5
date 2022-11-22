import styled from "styled-components";

export const Title = styled.p`
    max-width: 200px;
    margin-bottom: ${p => `${p.theme.space[4]}px`};
    margin-top: ${p => `${p.theme.space[4]}px`};
    padding: 5px;
    text-align: center;
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${P => P.theme.fontWeights.bold}
`;