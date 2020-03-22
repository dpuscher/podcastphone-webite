import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "./icons/MenuIcon";
import {
  H1,
  HeaderInner,
  HeightPlaceholder,
  Icon,
  MenuItem,
  Spacer,
  ToggleButton,
  Wrapper,
} from "./styles/Header.styles";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(state => !state);

  return (
    <>
      <HeightPlaceholder />
      <Wrapper>
        <HeaderInner isOpen={open}>
          <H1>
            <Icon width={36} color="#fff" />
            <Link href="/" passHref>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>PodcastPhone</a>
            </Link>
          </H1>
          <MenuItem href="#vision">Vision</MenuItem>
          <MenuItem href="#team">Team</MenuItem>
          <MenuItem href="#press">Presse</MenuItem>
          <Spacer />
          <ToggleButton onClick={toggleOpen}>
            <MenuIcon size={20} color="#fff" />
          </ToggleButton>
        </HeaderInner>
      </Wrapper>
    </>
  );
};

export default Header;
