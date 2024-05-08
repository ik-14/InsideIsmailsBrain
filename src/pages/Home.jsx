import { Canvas } from "@react-three/fiber";
import "../styles/App.css";
import { Environment, OrbitControls, Shadow } from "@react-three/drei";
import { IsmailModel } from "../../public/models/IsmailModel";
import { useState } from "react";
import { useRef } from "react";
import { IsmailText } from "../components/Home/IsmailText";
import ContentText from "../components/Home/ContentText";

function Home() {
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
      </Canvas>
    </>
  );
}

export default Home;
