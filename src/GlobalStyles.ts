import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  *{
    font-family: 'Inter', sans-serif;
  }

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

  button {
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  background-color: transparent;
  }
`;
