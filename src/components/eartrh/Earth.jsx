import React from "react";
import earthDayMap from "../../assets/texture/8k_earth_daymap.jpg";
import earthCloudsMap from "../../assets/texture/8k_earth_clouds.jpg";
import earthNightMap from "../../assets/texture/8k_earth_nightmap.jpg";
import earthNormalMap from "../../assets/texture/8k_earth_normal_map.jpg";
import earthSpecularMap from "../../assets/texture/8k_earth_specular_map.jpg";
import { useLoader } from "react-three-fiber";
import { TextureLoader } from "three";

const Earth = () => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [
      earthDayMap,
      earthNormalMap,
      earthSpecularMap,
      earthCloudsMap,
      // earthNightMap,
    ]
  );
  return (
    <>
      <ambientLight intensity={1} />
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
      </mesh>
    </>
  );
};

export default Earth;
