import styled from "styled-components";
import Controls from "./controls/Controls";
import useVideoElement from "../services/hooks/useVideoElement";

function VideoPlayer() {
  const { player, handlers } = useVideoElement();

  return (
    <Container>
      {/* @ts-ignore */}
      <Player ref={player} autoPlay preload="metadata" />

      <Controls handlers={handlers} />
    </Container>
  );
}

export default VideoPlayer;

const Player = styled.video`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: relative;
  border: 1px solid white;
  height: 60vh;
  width: 60vw;
  display: block;
`;
