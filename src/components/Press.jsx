import React from "react";
import { Item, Items, SubHeadline } from "./styles/Press.styles";
import H2 from "./typography/H2";

const Press = () => (
  <>
    <H2 id="press">Presse</H2>
    <Items>
      <Item>
        <SubHeadline>Retweet von Dorothee Bär</SubHeadline>
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
          charset="utf-8"
        />
      </Item>
    </Items>
  </>
);

export default Press;
