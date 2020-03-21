import { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768,
};

const generateMinMediaQuery = label => (...args) => css`
  @media (min-width: ${sizes[label]}px) {
    ${css(...args)}
  }
`;

export const desktop = generateMinMediaQuery("desktop");
export const tablet = generateMinMediaQuery("tablet");

const generateMaxMediaQuery = label => (...args) => css`
  @media (max-width: ${sizes[label] - 1}px) {
    ${css(...args)}
  }
`;

export const mobileOrTablet = generateMaxMediaQuery("desktop");
export const mobile = generateMaxMediaQuery("tablet");
