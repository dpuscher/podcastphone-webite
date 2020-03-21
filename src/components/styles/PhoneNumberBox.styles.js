import styled from "styled-components";
import { petrol } from "../../lib/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`;

export const Box = styled.a`
  display: block;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
  background: ${petrol};
  color: #fff;
  font-size: 2em;
  font-weight: 500;
`;

export const Subtitle = styled.span`
  font-size: 0.8rem;
`;
