import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 18px;
  }
  
  body {
    background-color: #ffffff;
    box-sizing: border-box;
    margin: 0 auto;
  }

  h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 500;
  }

  h2 {
    margin: 0;
    font-size: 32px;
  }

  h3 {
    margin: 0;
    font-size: 20px;
  }

  ul {
    list-style: none;
  }

  p {
    font-size: 18px;
    margin: 0;
  }
`;

export default GlobalStyle;
