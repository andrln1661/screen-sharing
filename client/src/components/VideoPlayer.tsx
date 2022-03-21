import React from "react";
import styled from "styled-components";

function VideoPlayer() {
  return <Player autoPlay />;
}

export default VideoPlayer;

const Player = styled.video`
  border: 1px solid white;
`;
