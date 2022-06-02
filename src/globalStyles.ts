import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    width: 100%;
    margin: 0;
    font-family: sans-serif;
  }

  html, body {
    height: 100vh;
  }
  
  #root {
    height: 100vh;
  }
`;

export default GlobalStyles;
