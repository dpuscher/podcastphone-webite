import React from "react";
import teamData from "./data/teamData";
import { Content, H2, Item, Items, Name, Photo } from "./styles/Team.styles";

const Team = () => (
  <>
    <H2 id="team">Team</H2>
    <Items>
      {teamData.map(({ name, image, content }) => (
        <Item>
          <Photo
            sizes="(min-width: 1024px) 200px, 29vw"
            src={image.src}
            srcSet={image.srcSet}
            alt=""
          />
          <Name>{name}</Name>
          <Content>{content}</Content>
        </Item>
      ))}
    </Items>
  </>
);

export default Team;
