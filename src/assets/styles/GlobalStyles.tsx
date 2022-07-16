import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
  }

  a, button {
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    color: #000;
    cursor: pointer;
  }

  button {
    background-color: inherit;
    border: none;

    &:focus {
      outline: none;
    }
  }

  a {
    text-decoration: none;

    &:focus {
      outline: none;
    }
  }

  h1, h2, h3, h4, h5, h5 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  hr {
    margin: 0;
  }

  input, textarea {
    font-family: 'Montserrat', sans-serif;
    color: #000;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
