import styled from "styled-components";
import { petrol, yellow } from "../../lib/colors";

export const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  background: ${petrol};
`;

export const FooterInner = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: auto;
`;

export const FooterLink = styled.a`
  display: inline-block;
  height: 40px;
  padding: 0 15px;
  transition: color 0.1s;
  color: #fff;
  line-height: 40px;
  text-decoration: none;

  &:hover {
    color: ${yellow};
  }
`;
