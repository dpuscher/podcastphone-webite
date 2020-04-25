import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "next-i18next";
import { Box, Subtitle, Wrapper } from "./styles/PhoneNumberBox.styles";

const PhoneNumberBox = ({ t }) => (
  <>
    <Wrapper>
      <Box href="tel:+498000004227">{t("number")}</Box>
      <Subtitle>{t("numberCosts")}</Subtitle>
    </Wrapper>
  </>
);

PhoneNumberBox.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("home")(PhoneNumberBox);
