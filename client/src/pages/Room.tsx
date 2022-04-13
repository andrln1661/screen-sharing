import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import VideoPlayer from "../components/VideoPlayer";
import CustomButton from "../components/CustomButton";
import { socket } from "../services/socket/socket";
import peer from "../services/socket/peer";

function Room() {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const date = new Date();
    socket.emit("create-room", params.roomId, date);
  }, []);

  return (
    <RoomContainer>
      <VideoPlayer />
      <CustomButton
        onClick={(event) => {
          event.preventDefault();
          navigate("/");
        }}
      >
        List Rooms
      </CustomButton>
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
  gap: 20px;
`;
