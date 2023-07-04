import React, { useRef } from "react";
import earthDayMap from "../../assets/texture/8k_earth_daymap.jpg";
import earthCloudsMap from "../../assets/texture/8k_earth_clouds.jpg";
import earthNightMap from "../../assets/texture/8k_earth_nightmap.jpg";
import earthNormalMap from "../../assets/texture/8k_earth_normal_map.jpg";
import earthSpecularMap from "../../assets/texture/8k_earth_specular_map.jpg";
import { useFrame, useLoader } from "react-three-fiber";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

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

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.5} />
      <Stars radius={300} depth={160} count={5000} factor={5} saturation={0} />
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.3}
          depthWrite
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enableZoom
          enablePan
          enableRotate
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
};

export default Earth;
