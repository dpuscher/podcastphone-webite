import styled, { css } from "styled-components";
import { desktop } from "../../lib/mediaQueries";

export const Items = styled.div`
  display: block;
  text-align: left;
`;

export const Item = styled.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SubHeadline = styled.h3`
  margin: 10px 0;
`;
