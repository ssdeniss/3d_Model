import React from "react";

const Earth = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color="blue" />
      </mesh>
    </>
  );
};

export default Earth;
