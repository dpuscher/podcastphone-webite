import styled from "styled-components";
import { petrol } from "../../lib/colors";

export const Headline = styled.div`
  color: ${petrol};
  font-weight: bold;
`;

export const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  width: ${props => props.width}px;
`;

export const Logo = styled.img`
  max-width: 100%;
  margin: 20px 0;
`;
