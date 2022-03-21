import { Route, Routes, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Room from "./pages/Room";
import HomePage from "./pages/HomePage";

function App(): JSX.Element {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path=":roomId" element={<Room />} />
        </Routes>
      </BrowserRouter>
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
