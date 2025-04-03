import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  img {
    box-sizing: border-box;
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  ul, li, p {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
