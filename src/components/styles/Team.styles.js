import styled, { css } from "styled-components";
import { petrol } from "../../lib/colors";
import { desktop } from "../../lib/mediaQueries";

export const Items = styled.div`
  display: block;
  margin: 0 -20px;
  text-align: left;

  ${desktop(css`
    display: flex;
    flex-wrap: wrap;
  `)}
`;

export const Photo = styled.img`
  width: 30%;
  max-width: 180px;
  margin: 0 10px 10px 0;
  float: left;

  ${desktop(css`
    width: 200px;
    max-width: none;
    margin: 0 20px 20px 0;
  `)}
`;

export const Item = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;

  &:after {
    content: " ";
    display: block;
    clear: both;
  }

  ${desktop(css`
    width: 50%;
  `)}
`;

export const Name = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export const Sprichwort = styled.div`
  font-size: 1em;
  font-style: italic;
`;

export const Content = styled.div`
  margin-top: 15px;
`;
