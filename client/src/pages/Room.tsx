import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import VideoPlayer from "../components/VideoPlayer";
import CustomButton from "../components/CustomButton";

function Room() {
  const navigate = useNavigate();
  const { roomId } = useParams();

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
