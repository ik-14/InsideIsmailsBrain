import { Canvas } from "@react-three/fiber";
import "./styles/App.css";
import {
  Box,
  Center,
  Environment,
  Html,
  OrbitControls,
  Scroll,
  ScrollControls,
  Shadow,
  Text,
  Text3D,
} from "@react-three/drei";
import { IsmailModel } from "../public/models/IsmailModel";
import { useState } from "react";
import { useRef } from "react";
import { IsmailText } from "./components/Home/IsmailText";
import ContentText from "./components/Home/ContentText";
import font from "./font2.json";

function App() {
  const [modelHovered, setModelHovered] = useState(false);
  const [darkMode, SetDarkMode] = useState(true);
  const ismailModelRef = useRef();
  const aboutRef = useRef();
  const blogRef = useRef();
  const photoRef = useRef();
  const randomRef = useRef();

  const canvasStyle = {
    top: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: darkMode ? "#313531" : "#DDD6C9",
  };

  const themSwitcher = {
    zIndex: 1,
    position: "absolute",
  };

  return (
    <>
      <div style={themSwitcher}>
        <button
          onClick={() => {
            SetDarkMode(true);
          }}
        >
          Dark Mode
        </button>
        <button
          onClick={() => {
            SetDarkMode(false);
          }}
        >
          Light Mode
        </button>
      </div>
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
        />
        <ScrollControls distance={1} pages={4.25}>
          <Scroll>
            <IsmailText modelHovered={modelHovered} darkMode={darkMode} />

            <mesh
              ref={ismailModelRef}
              position-y={-1}
              onPointerEnter={() => {
                setModelHovered(true);
              }}
            >
              <Shadow color="black" colorStop={0} opacity={0.6} />
              <IsmailModel />
            </mesh>
            {modelHovered && (
              <ContentText
                darkMode={darkMode}
                aboutRef={aboutRef}
                blogRef={blogRef}
                photoRef={photoRef}
                randomRefRef={randomRef}
              />
            )}
          </Scroll>

          <Scroll>
            <Center position={[0, -5, 0]}>
              <Text3D font={font} size={0.19}>
                About Me
                <meshMatcapMaterial color={darkMode ? "beige" : "#7F7A73"} />
                <Html position={[0, 0, 0]} ref={aboutRef} />
              </Text3D>
              <Text
                position={[0.5, -0.5, 0]}
                textAlign="center"
                fontSize={0.15}
                maxWidth={2.5}
              >
                Hi! I'm Ismail and i'm a junior software engineer based in
                London
              </Text>
            </Center>
          </Scroll>

          <Scroll>
            <Center position={[0, -10, 0]}>
              <Text3D font={font} size={0.19}>
                Blog
                <meshMatcapMaterial color={darkMode ? "beige" : "#7F7A73"} />
                <Html position={[0, -6, 0]} ref={blogRef} />
              </Text3D>
              <Text
                position={[0.5, -0.8, 0]}
                textAlign="center"
                fontSize={0.15}
                maxWidth={2.5}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis ea doloremque perferendis repudiandae iusto aliquam
                earum impedit consectetur.
              </Text>
            </Center>
          </Scroll>

          <Scroll>
            <Center position={[0, -15, 0]}>
              <Text3D font={font} size={0.19}>
                Photos
                <meshMatcapMaterial color={darkMode ? "beige" : "#7F7A73"} />
                <Html position={[0, -22, 0]} ref={photoRef} />
              </Text3D>
              <Text
                position={[0.5, -0.8, 0]}
                textAlign="center"
                fontSize={0.15}
                maxWidth={2.5}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                architecto natus accusamus asperiores velit quam harum sunt
                voluptates.
              </Text>
            </Center>
          </Scroll>

          <Scroll>
            <Center position={[0, -20, 0]}>
              <Text3D font={font} size={0.19}>
                Random
                <meshMatcapMaterial color={darkMode ? "beige" : "#7F7A73"} />
                <Html position={[0, 0, 0]} ref={randomRef} />
              </Text3D>
              <Text
                position={[0.5, -0.8, 0]}
                textAlign="center"
                fontSize={0.15}
                maxWidth={2.5}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam ullam ea molestias quia quisquam nobis rem labore
                iusto?
              </Text>
            </Center>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
