import { Canvas } from "@react-three/fiber";
import "./App.css";
import {  Environment, OrbitControls } from "@react-three/drei";
import { IsmailModel } from "./components/IsmailModel";

function App() {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 40 }}>
      <ambientLight />
      <Environment preset="sunset"/>
      <OrbitControls />
      <group position-y={-1}>
        <IsmailModel />
      </group>
    </Canvas>
  );
}

export default App;
