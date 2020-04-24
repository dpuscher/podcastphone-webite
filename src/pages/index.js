import React from "react";
import Partners from "../components/Partners";
import PhoneNumberBox from "../components/PhoneNumberBox";
import Press from "../components/Press";
import PressLogos from "../components/PressLogos";
import Team from "../components/Team";
import VideoEmbed from "../components/VideoEmbed";
import Vision from "../components/Vision";
import {
  Content,
  H2,
  Hero,
  HeroImage,
  Wrapper,
} from "../styles/indexPage.styles";

// eslint-disable-next-line import/no-unresolved
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
          Im Rahmen des #wirvsvirus Hackathon der Bundesregierung Deutschland
          werden mutige und innovative Ideen gesucht, die der Gesellschaft dabei
          helfen, jetzt solidarisch zu sein und gestärkt aus der aktuellen
          schwierigen Situation durch Covid-19 hervorzugehen.
        </p>
        <p>
          Unter der Challenge „Analoge Unterstützung: Wie können Personen (bes.
          SeniorInnen) ohne Internet-Zugang betreut und unterstützt werden?“ hat
          es sich das Team von PodcastPhone zur Aufgabe gemacht, digitale
          Inhalte wie Podcasts via Telefon zu der älteren Bevölkerung & Menschen
          in Isolation oder Quarantäne ohne Internetzugang zu bringen.
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
        <p>
          Dadurch soll nicht nur eine Brücke zwischen der digitalen Medienwelt
          und analogen Kommunikationsmitteln geschlagen werden, sondern auch die
          Möglichkeit entstehen, sich der Gesellschaft wieder näher zu fühlen.
        </p>
        <p>
          Die Informationsbreite des Internets ist in Zukunft nur noch einen
          Anruft entfernt. Mit PodcastPhone.
        </p>
        <PhoneNumberBox />
        <VideoEmbed />
        <PressLogos />
        <Vision />
        <Team />
        <Press />
        <Partners />
      </Content>
    </Wrapper>
  </>
);

export default Home;
