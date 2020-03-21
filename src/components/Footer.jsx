import React from "react";
import Link from "next/link";
import { FooterInner, FooterLink, Wrapper } from "./styles/Footer.styles";

const Footer = () => (
  <Wrapper>
    <FooterInner>
      <Link href="/impressum" passHref>
        <FooterLink>Impressum</FooterLink>
      </Link>
      <Link href="/datenschutz" passHref>
        <FooterLink>Datenschutz</FooterLink>
      </Link>
    </FooterInner>
  </Wrapper>
);

export default Footer;
