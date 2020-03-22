import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import GoogleAnalytics from "../components/tracking/GoogleAnalytics";
import GlobalStyles from "../styles/GlobalStyles";

export default ({ Component, pageProps }) => (
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
