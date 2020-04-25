import PropTypes from "prop-types";
import React from "react";
import Head from "next/head";
import { withTranslation } from "../../i18n";
import GoogleAnalytics from "./tracking/GoogleAnalytics";

const HeadComponent = ({ t }) => (
  <Head>
    <title>PodcastPhone · {t("slogan")}</title>
    <GoogleAnalytics />
  </Head>
);

HeadComponent.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(HeadComponent);
