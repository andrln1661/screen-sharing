import { createContext, useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Room from "./pages/Room";
import HomePage from "./pages/HomePage";
import { socket } from "./services/socket/socket";

export const SocketContext = createContext<any>(null);

function App(): JSX.Element {
  return (
    <AppContainer>
      <SocketContext.Provider value={socket}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path=":roomId" element={<Room />} />
          </Routes>
        </BrowserRouter>
      </SocketContext.Provider>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
