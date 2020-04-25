import styled, { css } from "styled-components";
import { desktop } from "../../lib/mediaQueries";

export const Items = styled.div`
  display: block;
  text-align: left;

  ${desktop(css`
    display: flex;
    margin: 0 -20px;
  `)}
`;

export const SubHeadline = styled.h3`
  margin: 10px 0;

  ${props =>
    props.hasMoreSpace &&
    css`
      margin-top: 40px;
    `}
`;

export const Item = styled.div`
  margin-top: 40px;
  ${desktop(css`
    width: 50%;
    margin-top: 0;
    padding: 0 20px;
  `)}
`;
