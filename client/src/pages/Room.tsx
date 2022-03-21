import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Title from "../components/Title";
import VideoPlayer from "../components/VideoPlayer";
import useVideoPlayer from "../services/hooks/useVideoPlayer";

function Room() {
  const { roomId } = useParams();
  const videoPlayer = useVideoPlayer(null);

  return (
    <RoomContainer>
      <Title>RoomId: {roomId}</Title>
      <VideoPlayer />
    </RoomContainer>
  );
}

export default Room;

const RoomContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
