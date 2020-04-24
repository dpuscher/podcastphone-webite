import React from "react";
import sipgateLogo from "../assets/logo_sipgate.svg";
import cellularLogo from "../assets/logo_cellular.svg";
import zdfLogo from "../assets/logo_zdf.svg";
import regierungLogo from "../assets/logo_bundesregierung.svg";
import hackathonLogo from "../assets/logo_hackathon.png";
import solutionEnablerLogo from "../assets/Solution-Enabler.png";
import {
  Heading,
  Logos,
  LogoWrapper,
  Logo,
  Wrapper,
} from "./styles/Partners.styles";

const Partners = () => (
  <>
    <Wrapper>
      <Logos>
        <Heading>Initiiert von:</Heading>
        <LogoWrapper>
          <Logo logoWidth={120}>
            <img src={regierungLogo} alt="Bundesregierung" width="120" />
          </Logo>
          <Logo logoWidth={120}>
            <img src={hackathonLogo} alt="WirVsVirus" width="120" />
          </Logo>
        </LogoWrapper>
      </Logos>

      <Logos>
        <Heading>Unterstützt von:</Heading>
        <LogoWrapper>
          <Logo logoWidth={120}>
            <img
              src={solutionEnablerLogo}
              alt="Solution Enabler Program"
              width="120"
            />
          </Logo>
          <Logo logoWidth={90}>
            <img src={zdfLogo} alt="ZDF" width="90" />
          </Logo>
          <Logo logoWidth={120}>
            <img src={sipgateLogo} alt="Sipgate" width="120" />
          </Logo>
          <Logo logoWidth={55}>
            <img src={cellularLogo} alt="Cellular" width="55" />
          </Logo>
        </LogoWrapper>
      </Logos>
    </Wrapper>
  </>
);

export default Partners;
