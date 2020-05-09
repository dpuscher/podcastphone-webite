import PropTypes from "prop-types";
import React from "react";
import { withTranslation } from "../../i18n";
import externalLinkAttr from "../lib/externalLinkAttr";
import { Item, Items, SubHeadline } from "./styles/Press.styles";
import H2 from "./typography/H2";

const Press = ({ t }) => (
  <>
    <H2 id="press">{t("pressHeading")}</H2>
    <Items>
      <Item>
        <SubHeadline>{t("vodafoneStoryHeadline")}</SubHeadline>
        <a href="https://www.vodafone-institut.de/events/pocastphone-digital-news-the-analogue-way/">
        #WirVsVirus: PodcastPhone is an analogous news service that provides digital information toll-free 24/7 via telephone to close the societal information gap.
        </a>
      </Item>
      <Item>
        <SubHeadline>{t("tweetHeadline")}</SubHeadline>
        <blockquote className="twitter-tweet">
          <p lang="de" dir="ltr">
            Gerade exklusiven Sneak Peak in einen{" "}
            <a href="https://twitter.com/hashtag/WirVsVirus?src=hash&amp;ref_src=twsrc%5Etfw">
              #WirVsVirus
            </a>{" "}
            MVP gesehen -&gt;{" "}
            <a href="https://twitter.com/hashtag/PodcastPhone?src=hash&amp;ref_src=twsrc%5Etfw">
              #podcastphone
            </a>
            . Mit Hilfe des{" "}
            <a href="https://twitter.com/ZDF?ref_src=twsrc%5Etfw">@ZDF</a> ist
            hier in den letzten 24h unfassbares geleistet worden.{" "}
            <a href="https://twitter.com/DoroBaer?ref_src=twsrc%5Etfw">
              @DoroBaer
            </a>{" "}
            das wird dich begeistern!
          </p>
          &mdash; Panos Meyer (@pame){" "}
          <a href="https://twitter.com/pame/status/1241443910884429824?ref_src=twsrc%5Etfw">
            March 21, 2020
          </a>
        </blockquote>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
      </Item>

      <Item>
        <SubHeadline>{t("chipHeadline")}</SubHeadline>
        <p>
          „{t("chipReview")}”
          <br />
          <small>
            {t("chipSubline")} |{" "}
            <a
              href="https://www.chip.de/downloads/PodcastPhone_182565403.html"
              {...externalLinkAttr}
            >
              {t("source")}
            </a>
          </small>
        </p>

        <SubHeadline hasMoreSpace>{t("pressReleases")}</SubHeadline>
        <p>
          <a href="/documents/PM_PodcastPhone_003.pdf" {...externalLinkAttr}>
            {t("pressRelease1")}
          </a>
        </p>
        <p>
          <a href="/documents/PM_PodcastPhone_002.pdf" {...externalLinkAttr}>
            {t("pressRelease2")}
          </a>
        </p>
        <p>
          <a href="/documents/PM_PodcastPhone_001.pdf" {...externalLinkAttr}>
            {t("pressRelease3")}
          </a>
        </p>
      </Item>
    </Items>
  </>
);

Press.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("home")(Press);
