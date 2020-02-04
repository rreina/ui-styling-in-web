import styled from 'styled-components';

export const H1 = styled.h1`
    font-family: 'Archivo Black', sans-serif;
    font-size: 1.9em;
    margin-left: ${props => props.theme.spacingMultiplier * 3};
    margin-top: ${props => props.theme.spacingMultiplier * 2};
    margin-bottom: ${props => props.theme.spacingMultiplier * 2};
    color: ${props => props.theme.textColor};
`;
export const H2 = styled.h2`
    font-family: 'Archivo Black', sans-serif;
    color: ${props => props.theme.secondaryTextColor};
`;
export const H3 = styled.h3`
    font-family: 'Archivo Black', sans-serif;
    color: ${props => props.theme.secondaryTextColor};
`;
export const H4 = styled.h4`
    font-family: 'Archivo Black', sans-serif;
    color: ${props => props.theme.secondaryTextColor};
`;
export const H5 = styled.h5`
    font-family: 'Archivo Black', sans-serif;
    color: ${props => props.theme.secondaryTextColor};
`;
export const H6 = styled.h6`
    font-family: 'Archivo Black', sans-serif;
    color: ${props => props.theme.secondaryTextColor};
`;
