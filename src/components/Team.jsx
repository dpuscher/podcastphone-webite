import React from "react";
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

const Team = () => (
  <>
    <H2 id="team">Team</H2>
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
          <Saying>{saying}</Saying>
          <Content>{content}</Content>
        </Item>
      ))}
    </Items>
  </>
);

export default Team;
