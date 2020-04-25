import PropTypes from "prop-types";
import React from "react";
import { Link, withTranslation } from "../../i18n";
import { FooterInner, FooterLink, Wrapper } from "./styles/Footer.styles";

const Footer = ({ t }) => (
  <Wrapper>
    <FooterInner>
      <Link href="/impressum" passHref>
        <FooterLink>{t("legal")}</FooterLink>
      </Link>
      <Link href="/datenschutz" passHref>
        <FooterLink>{t("privacy")}</FooterLink>
      </Link>
    </FooterInner>
  </Wrapper>
);

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Footer);
