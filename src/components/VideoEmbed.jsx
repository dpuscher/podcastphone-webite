import React from "react";
import { IFrame, VideoContainer, Wrapper } from "./styles/VideoEmbed.styles";

const VideoEmbed = () => (
  <Wrapper>
    <VideoContainer>
      <IFrame
        src="https://www.youtube-nocookie.com/embed/_T2BBK8cE4Y"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
      />
    </VideoContainer>
  </Wrapper>
);

export default VideoEmbed;
