import React, { useState, useRef, useEffect, useCallback } from "react";

function useVideoPlayer(initialValue: any) {
  const player = useRef(initialValue);

  const minimize = () => {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else {
      if (document.pictureInPictureEnabled) {
        player.current.requestPictureInPicture();
      }
    }
  };

  const changeSrc = async () => {
    try {
      const mediaStream = navigator.mediaDevices.getDisplayMedia();
      player.current.srcObject = mediaStream;
    } catch (error) {
      alert("Cannot choose screen");
    }
  };

  Object.assign(player, minimize);

  return player;
}

export default useVideoPlayer;
