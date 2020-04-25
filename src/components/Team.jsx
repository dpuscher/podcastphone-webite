import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";
import teamData from "./data/teamData";
import {
  Content,
  Item,
  Items,
  Name,
  Saying,
  Photo,
} from "./styles/Team.styles";
import H2 from "./typography/H2";

const Team = ({ t }) => (
  <>
    <H2 id="team">{t("teamHeadline")}</H2>
    <Items>
      {teamData.map(({ name, image, saying, content }) => (
        <Item key={name}>
          <Photo
            sizes="(min-width: 1024px) 200px, 29vw"
            src={image.src}
            srcSet={image.srcSet}
            alt=""
          />
          <Name>{name}</Name>
          <Saying>{saying && t(saying)}</Saying>
          <Content>{content && t(content)}</Content>
        </Item>
      ))}
    </Items>
  </>
);

Team.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("home")(Team);
