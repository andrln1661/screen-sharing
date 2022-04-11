import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Controls from "./controls/Controls";

function VideoPlayer() {
  const [screen, setScreen] = useState<MediaStream>();
  const player = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log(screen);
    // @ts-ignore
    player.current.srcObject = screen;
    //
  }, [screen]);

  const chooseScreen = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      setScreen(mediaStream);
    } catch (error) {
      console.error(error);
    }
  };
  const mute = async () => {};
  const pipF = async () => {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else {
      if (document.pictureInPictureEnabled) {
        player.current?.requestPictureInPicture();
      }
    }
  };
  const fullscreen = async () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      if (document.fullscreenEnabled) {
        player.current?.requestFullscreen();
      }
    }
  };

  return (
    <Container>
      <Player ref={player} autoPlay preload="metadata" />
      <Controls
        chooseScreen={chooseScreen}
        mute={mute}
        pipF={pipF}
        fullscreen={fullscreen}
        screen={screen}
      />
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
