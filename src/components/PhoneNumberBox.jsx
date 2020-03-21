import React from "react";
import { Box, Subtitle, Wrapper } from "./styles/PhoneNumberBox.styles";

const PhoneNumberBox = () => (
  <>
    <Wrapper>
      <Box href="tel:+498000004227">0800 000 422 7</Box>
      <Subtitle>Kostenlos erreichbar aus allen deutschen Netzen</Subtitle>
    </Wrapper>
  </>
);

export default PhoneNumberBox;
