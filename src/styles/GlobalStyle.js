import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 16px;
  }
  
  body {
    background: #ffffff;
    box-sizing: border-box;
    margin: 0 auto;
  }

  h1 {
    margin: 0;
    font-size: 36px;
  }

  h2 {
    margin: 0;
    font-size: 32px;
  }

  h3 {
    margin: 0;
    font-size: 28px;
  }

  ul {
    list-style: none;
  }

  p {
    margin: 0;
  }
`;

export default GlobalStyle;
