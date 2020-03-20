import React from "react";
import GlobalStyles from "../styles/GlobalStyles";

export default ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);
