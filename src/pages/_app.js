import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import GlobalStyles from "../styles/GlobalStyles";

export default ({ Component, pageProps }) => (
  <>
    <Head>
      <title>PodcastPhone · Digitale Inhalte für die Strippe</title>
    </Head>
    <GlobalStyles />
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
);
