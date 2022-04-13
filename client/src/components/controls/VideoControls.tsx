import React, { RefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import ControlToggle from "./ControlToggle";
import VolumeSlider from "./VolumeSlider.";

import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import PictureInPictureAltIcon from "@mui/icons-material/PictureInPictureAlt";
import PictureInPictureIcon from "@mui/icons-material/PictureInPicture";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";

import { Handlers } from "../../types";

const PlayToggle = ControlToggle(<ScreenShareIcon />, <StopScreenShareIcon />);
const MuteToggle = ControlToggle(<VolumeUpIcon />, <VolumeOffIcon />);
const FullscreenToggle = ControlToggle(
  <FullscreenIcon />,
  <FullscreenExitIcon />
);
const PictureInPictureToggle = ControlToggle(
  <PictureInPictureAltIcon />,
  <PictureInPictureIcon />
);

interface Togglers {
  [toggler: string]: boolean;
}

function VideoControls({ handlers }: { handlers: Handlers }) {
  const [togglers, updateTogglers] = useState<Togglers>({
    play: true,
    mute: true,
    fullscreen: true,
    pictureInPicture: true,
  });

  const handleToggle = (toggler: string, sideFunction: Function): Function => {
    return async (event: React.MouseEvent<HTMLElement>): Promise<void> => {
      event.preventDefault();
      await sideFunction(event);
      updateTogglers((prevState) => ({
        ...prevState,
        [toggler]: !togglers[toggler],
      }));
    };
  };

  return (
    <Container>
      <PlayToggle
        enabled={togglers.play}
        onClick={handleToggle("play", handlers.chooseScreen)}
      />
      <MuteToggle
        enabled={togglers.mute}
        onClick={handleToggle("mute", handlers.mute)}
      />
      <VolumeSlider></VolumeSlider>
      <PictureInPictureToggle
        enabled={togglers.pictureInPicture}
        onClick={handleToggle("pictureInPicture", handlers.pipF)}
      />
      <FullscreenToggle
        enabled={togglers.fullscreen}
        onClick={handleToggle("fullscreen", handlers.fullscreen)}
      />
    </Container>
  );
}

export default VideoControls;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  background: rgba(0, 0, 0, 0.3);
`;
