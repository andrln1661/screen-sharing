import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 } from "uuid";
import { Socket } from "socket.io-client";
import { socket } from "../services/socket/socket";

import Title from "../components/Title";
import CustomButton from "../components/CustomButton";
import AvailableList from "../components/AvailableList";
import { Rooms, Room } from "../types";
import { SocketContext } from "../App";

function HomePage() {
  const [rooms, updateRooms] = useState<Room[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    socket.emit("get-rooms");
    socket.on("get-rooms", (loadedrooms: Rooms): void => {
      const populated: Room[] = Object.keys(loadedrooms).map(
        (roomId) => loadedrooms[roomId]
      );
      updateRooms(populated);
    });
  }, []);

  return (
    <HomeContainer>
      <Title>Available Rooms</Title>
      <AvailableList rooms={rooms} />
      <CustomButton
        onClick={(event) => {
          event.preventDefault();
          navigate(v4());
        }}
      >
        Create Room
      </CustomButton>
    </HomeContainer>
  );
}

export default HomePage;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
