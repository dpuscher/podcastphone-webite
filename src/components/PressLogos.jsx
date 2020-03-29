import React from "react";
import logoHr3 from "../assets/press/logo_hr3.svg";
import logoHessenschau from "../assets/press/logo_hessenschau.svg";
import logoChip from "../assets/press/logo_chip.svg";
import logoFnp from "../assets/press/logo_fnp.svg";
import logoGiessenerAnzeiger from "../assets/press/logo_giessener_anzeiger.svg";
import logoLauterbacherAnzeiger from "../assets/press/logo_lauterbacher_anzeiger.svg";
import logoWormserZeitung from "../assets/press/logo_wormser_zeitung.svg";
import { Headline, Logo, Logos, LogoWrapper } from "./styles/PressLogos.styles";

const PressLogos = () => (
  <>
    <Headline>Bekannt aus:</Headline>
    <Logos>
      <LogoWrapper width="90">
        <Logo src={logoHr3} alt="HR3" />
      </LogoWrapper>
      <LogoWrapper width="120">
        <Logo src={logoHessenschau} alt="Hessenschau" />
      </LogoWrapper>
      <LogoWrapper width="120">
        <Logo src={logoChip} alt="Chip" />
      </LogoWrapper>
      <LogoWrapper width="120">
        <Logo src={logoFnp} alt="Frankfurter Neue Presse" />
      </LogoWrapper>
      <LogoWrapper width="120">
        <Logo src={logoGiessenerAnzeiger} alt="Giessener Anzeiger" />
      </LogoWrapper>
      <LogoWrapper width="120">
        <Logo src={logoLauterbacherAnzeiger} alt="Lauterbacher Anzeiger" />
      </LogoWrapper>
      <LogoWrapper width="120">
        <Logo src={logoWormserZeitung} alt="Wormser Zeitung" />
      </LogoWrapper>
    </Logos>
  </>
);

export default PressLogos;
