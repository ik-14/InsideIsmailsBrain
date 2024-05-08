import {
  Box,
  Environment,
  Image,
  Line,
  MeshPortalMaterial,
  OrbitControls,
  RoundedBox,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import colorhouses from "../colorhouses.jpeg";
import farmountain from "../farmountain.jpg";
import React, { useState } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import { easing, geometry } from "maath";
extend({ RoundedPlaneGeometry: geometry.RoundedPlaneGeometry });

const Photos = () => {
  const canvasStyle = {
    top: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: "white",
  };

  const [hovered, setHovered] = useState(false);

  const textureHandler = (img) => {
    const texture = useLoader(TextureLoader, img);
    return texture;
  };

  return (
    <>
      <Canvas
        id="homeCanvas"
        style={canvasStyle}
        camera={{ position: [0, 0.5, 4] }}
      >
        <ambientLight />
        <Environment preset="sunset" />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          maxAzimuthAngle={1.3089969389957472}
          minAzimuthAngle={-1.3089969389957472}
        />
        <RoundedBox args={[2, 3, 0.1]}>
          <MeshPortalMaterial side={THREE.DoubleSide}>
            <ambientLight intensity={1} />
            <Environment preset="sunset" />
            <mesh>
              <boxGeometry />
            </mesh>
            <mesh>
              <sphereGeometry args={[5, 64, 64]} />
              <meshStandardMaterial color="green" side={THREE.BackSide} />
            </mesh>
          </MeshPortalMaterial>
        </RoundedBox>

        {/* <ScrollControls pages={2}>
          <Scroll>
            <Line
              points={[
                [0, 2.5, 0],
                [0, 0, 0],
                [0, -8.9, 0],
              ]}
              color="red"
              lineWidth={15}
            />
          </Scroll>
          <Scroll>
            <mesh
              position={[1.3, 1, 0]}
              scale={hovered ? 1.2 : 1}
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}
            >
              <boxGeometry />
              <meshBasicMaterial map={textureHandler(colorhouses)} />
            </mesh>

            <Image scale={2} url={colorhouses} position={[1.3, -3, 0]} />
            <Image scale={2} url={colorhouses} position={[-1.3, -5, 0]} />
            <Image scale={2} url={colorhouses} position={[1.3, -7, 0]} />
          </Scroll>
        </ScrollControls> */}
      </Canvas>
    </>
  );
};

export default Photos;
