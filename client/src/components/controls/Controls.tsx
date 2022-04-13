import styled from "styled-components";
import { useParams } from "react-router-dom";

import VideoControls from "./VideoControls";
import Title from "../Title";

import { Handlers } from "../../types";

function Controls({ handlers }: { handlers: Handlers }): JSX.Element {
  const { roomId } = useParams();
  return (
    <Container data-state="hidden">
      <Title>Room ID: {roomId}</Title>
      <VideoControls handlers={handlers} />
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
