import { useRef, useState, useEffect } from "react";

function useVideoElement() {
  const [screen, setScreen] = useState<MediaStream>();
  const player = useRef<HTMLVideoElement>();

  useEffect(() => {
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

  const handlers = {
    mute,
    pipF,
    fullscreen,
    chooseScreen,
  };

  return { player, handlers, screen };
}

export default useVideoElement;
