import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "./icons/MenuIcon";
import TwitterIcon from "./icons/TwitterIcon";
import InstagramIcon from "./icons/InstagramIcon";
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
          <Link href="/#vision" passHref>
            <MenuItem>Vision</MenuItem>
          </Link>
          <Link href="/#team" passHref>
            <MenuItem href="#team">Team</MenuItem>
          </Link>
          <Spacer />
          <MenuItem href="https://twitter.com/PodcastPhone">
            <TwitterIcon width={35} color="white" />
          </MenuItem>
          <MenuItem href="https://www.instagram.com/podcastphone/">
            <InstagramIcon width={25} color="white" />
          </MenuItem>
          <ToggleButton onClick={toggleOpen}>
            <MenuIcon size={20} color="#fff" />
          </ToggleButton>
        </HeaderInner>
      </Wrapper>
    </>
  );
};

export default Header;
