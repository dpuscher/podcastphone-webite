import PropTypes from "prop-types";
import React from "react";
import { IFrame, VideoContainer, Wrapper } from "./styles/VideoEmbed.styles";

const VideoEmbed = ({ url, title }) => (
  <Wrapper>
    <VideoContainer>
      <IFrame
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
        title={title}
      />
    </VideoContainer>
  </Wrapper>
);

VideoEmbed.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
};

VideoEmbed.defaultProps = {
  title: undefined,
};

export default VideoEmbed;
