import { Canvas } from "@react-three/fiber";
import "./App.css";
import Bmw4 from "./Bmw4";
import { Environment, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      <Bmw4 />
      <Environment preset="sunset" />
    </Canvas>
  );
}

export default App;
