import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Router from "next/router";
import { i18n, Link, withTranslation } from "../../i18n";
import externalLinkAttr from "../lib/externalLinkAttr";
import MenuIcon from "./icons/MenuIcon";
import TwitterIcon from "./icons/TwitterIcon";
import InstagramIcon from "./icons/InstagramIcon";
import {
  H1,
  HeaderInner,
  HeightPlaceholder,
  Icon,
  LanguageButton,
  MenuItem,
  Spacer,
  ToggleButton,
  Wrapper,
} from "./styles/Header.styles";

const Header = ({ t }) => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", close);

    return () => {
      Router.events.off("routeChangeStart", close);
    };
  });

  const toggleOpen = () => setOpen(state => !state);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "de" : "en");
  };

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
            <MenuItem>{t("visionHeading")}</MenuItem>
          </Link>
          <Link href="/#team" passHref>
            <MenuItem>{t("teamHeading")}</MenuItem>
          </Link>
          <Link href="/#press" passHref>
            <MenuItem>{t("pressHeading")}</MenuItem>
          </Link>
          <Spacer />
          <MenuItem
            href="https://twitter.com/PodcastPhone"
            isSmall
            isIcon
            {...externalLinkAttr}
          >
            <TwitterIcon width={25} color="white" />
          </MenuItem>
          <MenuItem
            href="https://www.instagram.com/podcastphone/"
            isSmall
            isIcon
            {...externalLinkAttr}
          >
            <InstagramIcon width={25} color="white" />
          </MenuItem>
          <MenuItem isSmall onClick={toggleLanguage} isButton as="button">
            <LanguageButton>
              {i18n.language === "en" ? "DE" : "EN"}
            </LanguageButton>
          </MenuItem>
          <ToggleButton onClick={toggleOpen}>
            <MenuIcon size={20} color="#fff" />
          </ToggleButton>
        </HeaderInner>
      </Wrapper>
    </>
  );
};

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("home")(Header);
