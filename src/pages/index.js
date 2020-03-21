import React from "react";
import {
  Content,
  H2,
  Hero,
  HeroImage,
  Wrapper,
} from "../styles/indexPage.styles";

const header = require("../assets/header.jpg?resize&sizes[]=340&sizes[]=680&sizes[]=800&sizes[]=1024");

const Home = () => (
  <>
    <Wrapper>
      <Hero>
        <HeroImage src={header.src} srcSet={header.srcSet} alt="" />
      </Hero>
      <Content>
        <H2>Digitale Inhalte für die Strippe</H2>
        <p>
          Das <strong>#podcastphone</strong>: Wir bringen digitale Inhalte wie
          Podcasts via Telefon zu der älteren Bevölkerung & Menschen in
          Isolation oder Quarantäne ohne Internetzugang.
        </p>
        <p>
          Mit #podcastphone entsteht ein öffentlicher Informationsdienst, der
          einen analogen Zugang zu digitalen Inhalten ermöglicht. Unser Ziel ist
          es, tagesaktuelle digitale und regionale Formate auf der Tonspur unter
          einer öffentlichen kostenlosen Telefonnummer anzubieten. In einem
          weiteren Schritt soll der Dienst die Verbindung von Menschen
          untereinander ermöglichen und sogar die Möglichkeit eines Gesprächs
          mit einem Seelsorger oder Pfarrer anbieten.
        </p>
      </Content>
    </Wrapper>
  </>
);

export default Home;
