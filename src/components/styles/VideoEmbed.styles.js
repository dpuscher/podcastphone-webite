import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 30px auto;
`;

export const VideoContainer = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
`;

export const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
