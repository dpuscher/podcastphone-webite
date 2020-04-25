import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";
import H2 from "./typography/H2";

const Vision = ({ t }) => (
  <>
    <H2 id="vision">{t("visionHeading")}</H2>
    <p>{t("vision1")}</p>
    <p>{t("vision2")}</p>
    <p>{t("vision3")}</p>
    <p>
      <strong>{t("vision4h")}</strong>
      {t("vision4")}
    </p>
    <p>
      <strong>{t("vision5h")}</strong> {t("vision5")}
    </p>
    <p>
      <strong>{t("vision6h")}</strong> {t("vision6")}
    </p>
    <p>
      <strong>{t("vision7h")}</strong> {t("vision7")}
    </p>
    <p>{t("vision8")}</p>
    <p>{t("vision9")}</p>
  </>
);

Vision.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("home")(Vision);
