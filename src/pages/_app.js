import React from "react";
import App from "next/app";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import GoogleAnalytics from "../components/tracking/GoogleAnalytics";
import GlobalStyles from "../styles/GlobalStyles";
import { appWithTranslation } from "../../i18n";

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>PodcastPhone · Digitale Inhalte für die Strippe</title>
      <GoogleAnalytics />
    </Head>
    <GlobalStyles />
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
);

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(MyApp);
