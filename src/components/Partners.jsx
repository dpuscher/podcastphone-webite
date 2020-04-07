import React from "react";
import telekomLogo from "../assets/logo_telekom.svg";
import cellularLogo from "../assets/logo_cellular.svg";
import zdfLogo from "../assets/logo_zdf.svg";
import regierungLogo from "../assets/logo_bundesregierung.svg";
import hackathonLogo from "../assets/logo_hackathon.png";
import solutionEnablerLogo from "../assets/Solution-Enabler.png"
import { Heading, Logos, LogoWrapper, Wrapper } from "./styles/Partners.styles";

const Partners = () => (
  <>
    <Wrapper>
      <Logos>
        <Heading>Initiiert von:</Heading>
        <LogoWrapper>
          <img src={regierungLogo} alt="Bundesregierung" width="120" />
          <img src={hackathonLogo} alt="WirVsVirus" width="120" />
        </LogoWrapper>
      </Logos>

      <Logos>
        <Heading>Unterstützt von:</Heading>
        <LogoWrapper>
          <img src={solutionEnablerLogo} width="120" />
          <img src={zdfLogo} alt="ZDF" width="120" />
          <img src={telekomLogo} alt="Telekom" width="120" />
          <img src={cellularLogo} alt="Cellular" width="120" />
        </LogoWrapper>
      </Logos>
    </Wrapper>
  </>
);

export default Partners;
