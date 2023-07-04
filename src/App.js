import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import styled from "styled-components";
import Earth from "./components/eartrh/Earth";
import "./styles/style.css"

const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
};

export default App;
