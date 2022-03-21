import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface Props {
  rooms?: string[];
}

function AvailableList({ rooms: rooms }: Props) {
  const navigate = useNavigate();

  return (
    <RoomsListContainer>
      {rooms?.map((roomId) => {
        return (
          <RoomItem key={roomId}>
            <RoomId>{roomId}</RoomId>
            <RoomJoin
              onClick={(event) => {
                event.preventDefault();
                navigate(roomId);
              }}
            >
              Join
            </RoomJoin>
          </RoomItem>
        );
      })}
    </RoomsListContainer>
  );
}

export default AvailableList;

const RoomsListContainer = styled.ul`
  width: 30vw;
  min-width: 300px;
  height: 60vh;
  border: 1px solid white;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 5px 5px 5px 15px;
`;

const RoomItem = styled.li`
  width: 100%;
  font-size: 15px;
  border-bottom: 1px solid white;
  border-top: 1px solid white;
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RoomId = styled.p``;

const RoomJoin = styled.button`
  color: white;
  border: 1px solid white;
  background: black;
  padding: 0px 5px;

  &:hover {
    background: white;
    color: black;
  }
`;
