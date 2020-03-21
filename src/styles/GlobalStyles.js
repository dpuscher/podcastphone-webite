import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-text-size-adjust: 100%;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    position: relative;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
