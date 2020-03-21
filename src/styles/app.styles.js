import styled from "styled-components";
import { petrol } from "../lib/colors";

export const Header = styled.header`
  width: 100%;
  padding: 20px;
  background: ${petrol};
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 984px;
  margin: auto;
`;

export const H1 = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  line-height: 1;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background: ${petrol};
`;

export const FooterInner = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: auto;
`;

export const FooterLink = styled.a`
  padding: 10px;
  color: #fff;
`;
