import React from "react";
import PropTypes from "prop-types";
import Partners from "../components/Partners";
import PhoneNumberBox from "../components/PhoneNumberBox";
import Press from "../components/Press";
import PressLogos from "../components/PressLogos";
import Team from "../components/Team";
import VideoEmbed from "../components/VideoEmbed";
import Vision from "../components/Vision";
import externalLinkAttr from "../lib/externalLinkAttr";
import {
  Content,
  H2,
  Hero,
  HeroImage,
  NewsTicker,
  Wrapper,
} from "../styles/indexPage.styles";
import { withTranslation } from "../../i18n";

// eslint-disable-next-line import/no-unresolved
const header = require("../assets/header.jpg?resize&sizes[]=340&sizes[]=680&sizes[]=800&sizes[]=1024");

const Home = ({ t }) => (
  <>
    <Wrapper>
      <Hero>
        <HeroImage src={header.src} srcSet={header.srcSet} alt="" />
      </Hero>
      <Content>
        <NewsTicker>
          +++ News: Unser Service Silberdraht ist online +++
          <VideoEmbed
            title="Silberdraht"
            url="https://www.youtube-nocookie.com/embed/jEfBAXkLr5E"
          />
          Weitere Informationen unter:{" "}
          <a href="https://www.silberdraht.tel" {...externalLinkAttr}>
            silberdraht.tel
          </a>
        </NewsTicker>
        <H2>{t("common:slogan")}</H2>
        <p>{t("intro1")}</p>
        <p>{t("intro2")}</p>
        <p>{t("intro3")}</p>
        <p>{t("intro4")}</p>
        <p>{t("intro5")}</p>
        <PhoneNumberBox />
        <VideoEmbed
          url="https://www.youtube-nocookie.com/embed/_T2BBK8cE4Y"
          title="PodcastPhone"
        />
        <PressLogos />
        <Vision />
        <Team />
        <Press />
        <Partners />
      </Content>
    </Wrapper>
  </>
);

Home.getInitialProps = async () => ({
  namespacesRequired: ["common", "home"],
});

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(["home", "common"])(Home);
