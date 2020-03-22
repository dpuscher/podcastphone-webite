import React from "react";
import pressData from "./data/pressData";
import { Content, H2, Item, Items, Name, Photo } from "./styles/Press.styles";

const Press = () => (
  <>
    <H2 id="press">Presse</H2>
    <Items>
      {pressData.map(({ quelle, image, content, link }) => (
        <Item>
          <Photo
            sizes="(min-width: 1024px) 200px, 29vw"
            src={image.src}
            srcSet={image.srcSet}
            alt=""
          />
          <Quelle>{quelle}</Quelle>
          <Content>{content}</Content>
          <Link>{link}</Link>
        </Item>
      ))}
    </Items>
  </>
);

export default Press;
