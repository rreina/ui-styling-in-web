import styled from 'styled-components';

const padding = '10%';
export const Article = styled.article`
    padding: $base-spacing * 2;

    $padding: 10%;

    padding-left: ${padding};
    padding-right: ${padding};
    width: calc(100% - ${padding});
`;
