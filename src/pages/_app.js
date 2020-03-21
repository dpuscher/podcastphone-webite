import React from "react";
import Head from "next/head";
import Link from "next/link";
import TwitterIcon from "../components/icons/TwitterIcon";
import externalLinkAttr from "../lib/externalLinkAttr";
import GlobalStyles from "../styles/GlobalStyles";
import {
  Footer,
  FooterInner,
  FooterLink,
  H1,
  Header,
  HeaderInner,
} from "../styles/app.styles";

export default ({ Component, pageProps }) => (
  <>
    <Head>
      <title>PodcastPhone · Digitale Inhalte für die Strippe</title>
    </Head>
    <GlobalStyles />
    <Header>
      <HeaderInner>
        <H1>
          <Link href="/" passHref>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>PodcastPhone</a>
          </Link>
        </H1>
        <a
          href="https://twitter.com/podcastphone"
          title="Twitter"
          {...externalLinkAttr}
        >
          <TwitterIcon width={50} color="#fff" />
        </a>
      </HeaderInner>
    </Header>
    <Component {...pageProps} />
    <Footer>
      <FooterInner>
        <Link href="/impressum" passHref>
          <FooterLink>Impressum</FooterLink>
        </Link>
        <Link href="/datenschutz" passHref>
          <FooterLink>Datenschutz</FooterLink>
        </Link>
      </FooterInner>
    </Footer>
  </>
);
