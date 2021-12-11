import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html,body {
        margin: 0;
        padding: 0;
        font-family: 'Arial';
    }
    * {
        box-sizing: border-box; 
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`;
