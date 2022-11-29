import styled from "styled-components";

export const Item = styled.li`
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: ${p => `${p.theme.space[3]}px`};
    padding: 10px 5px;
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.text};
    background-color: ${p => p.theme.colors.lightAccent};
    border-bottom: 2px solid rgba(0, 0, 0,0.48);
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0,0.48);

    &:not(:last-child) {
       margin-bottom: ${p => `${p.theme.space[4]}px`}; 
    }

    @media screen and (min-width: 768px) {
        max-width: 700px;
        font-size: ${p => p.theme.fontSizes.m};
    }

    @media screen and (min-width: 1200px) {
        max-width: 1100px;
        padding: 10px;
        font-size: ${p => p.theme.fontSizes.l};
    }
`;

export const Name = styled.p`
    margin-bottom: ${p => `${p.theme.space[3]}px`}; 
    font-size: ${p => p.theme.fontSizes.l};

    @media screen and (min-width: 1200px) {
        max-width: 1100px;
        margin-bottom: ${p => `${p.theme.space[4]}px`}; 
        font-size: ${p => p.theme.fontSizes.xl};
    }
`;

export const NameAccent = styled.span`
    font-weight: ${p => p.theme.fontWeights.bold};
`;