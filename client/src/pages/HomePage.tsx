import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 } from "uuid";

import Title from "../components/Title";
import CustomButton from "../components/CustomButton";
import AvailableList from "../components/AvailableList";

function HomePage(): JSX.Element {
  const [rooms, updateRooms] = useState();
  const navigate = useNavigate();

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
