import styled, { css } from "styled-components";
import { petrol, yellow } from "../../lib/colors";
import { desktop, mobile, tablet } from "../../lib/mediaQueries";
import { buttonReset } from "../../lib/mixins";
import BrandIcon from "../icons/BrandIcon";

export const HeightPlaceholder = styled.div`
  width: 100px;
  height: 80px;
`;

export const Wrapper = styled.header`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  overflow: hidden;
  background: ${petrol};
`;

export const MenuItem = styled.a`
  display: none;
  margin-left: -20px;
  padding: 10px 20px;
  transition: color 0.1s;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: ${yellow};
  }

  ${tablet(css`
    display: block;
    margin-left: 0;
  `)}
`;

export const ToggleButton = styled.button`
  ${buttonReset}
  display: none;
  margin-right: -10px;
  padding: 10px;
  line-height: 0;

  ${mobile(css`
    display: block;
  `)}
`;

export const H1 = styled.h1`
  display: inline-flex;
  align-items: center;
  margin: 0;
  padding-right: 20px;
  font-size: 2rem;
  line-height: 1;

  ${tablet(css`
    font-size: 2.5rem;
  `)}

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 984px;
  margin: auto;

  ${props =>
    props.isOpen &&
    css`
      ${mobile(
        () => css`
          position: relative;
          flex-direction: column;
          align-items: stretch;

          ${MenuItem} {
            display: block;
          }

          ${ToggleButton} {
            position: absolute;
            right: 0;
            top: 0;
          }

          ${H1} {
            padding-bottom: 10px;
          }
        `,
      )}
    `}
`;

export const Spacer = styled.div`
  flex-grow: 1;

  ${desktop(css`
    display: block;
  `)}
`;

export const Icon = styled(BrandIcon)`
  margin-right: 15px;
`;
