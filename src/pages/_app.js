import React from "react";
import App from "next/app";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Header from "../components/Header";
import GlobalStyles from "../styles/GlobalStyles";
import { appWithTranslation } from "../../i18n";

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head />
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(MyApp);
