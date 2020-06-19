import styled from "styled-components";
import { yellow } from "../lib/colors";

export const H2 = styled.h2`
  margin: 0 0 25px 0;
  color: ${yellow};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: auto;
`;

export const Hero = styled.header`
  position: relative;
  width: 100%;
  height: 320px;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-position: 50% 37%;
  object-fit: cover;
`;

export const Content = styled.section`
  padding: 25px 20px 50px;
  text-align: justify;
`;

export const NewsTicker = styled.div`
  margin: 10px 0 30px;
  font-weight: bold;
  text-align: center;
  font-size: 1.4rem;
`;
