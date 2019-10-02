import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  button, a {
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    html {
      font-size: 9px;
    }
  }
`;
