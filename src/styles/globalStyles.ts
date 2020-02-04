import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html,
    body,
    main {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    * {
        font-family: 'Judson', serif;
    }
`;
