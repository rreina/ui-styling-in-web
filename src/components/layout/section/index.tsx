import styled from 'styled-components';
import { headerHeight } from '../header';

export const Section = styled.section`
    position: absolute;
    top: ${headerHeight}px;
    display: block;
    min-height: 100%;
    width: 100%;
    background-color: ${props => props.theme.tertiaryColor};
`;
