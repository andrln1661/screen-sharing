import styled from "styled-components";

import VideoControls from "./VideoControls";
import Title from "../Title";
import { useParams } from "react-router-dom";

function Controls({
  chooseScreen,
  mute,
  pipF,
  fullscreen,
  screen,
}: {
  chooseScreen: Function;
  pipF: Function;
  mute: Function;
  fullscreen: Function;
  screen: MediaStream | undefined | null;
}): JSX.Element {
  const { roomId } = useParams();
  return (
    <Container data-state="hidden">
      <Title>Room ID: {roomId}</Title>
      <VideoControls
        chooseScreen={chooseScreen}
        mute={mute}
        pipF={pipF}
        fullscreen={fullscreen}
        screen={screen}
      />
    </Container>
  );
}

export default Controls;

const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: calc(60vw - 2px);
  height: calc(60vh - 2px);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    opacity: 1;
  }
`;
