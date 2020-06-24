import styled, { css } from "styled-components";
import externalLinkAttr from "../../lib/externalLinkAttr";
import { tablet } from "../../lib/mediaQueries";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #444;
  font-weight: bold;
  ${tablet(css`
    flex-direction: row;
  `)}
`;

export const Logos = styled.div`
  width: 100%;
  ${tablet(css`
    width: 50%;
  `)}
  margin-top: 30px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
`;

export const Logo = styled.a.attrs(externalLinkAttr)`
  display: block;
  width: ${props => props.logoWidth}px;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export const Heading = styled.div`
  width: 50%;
  margin-bottom: 10px;
  text-align: left;
`;
