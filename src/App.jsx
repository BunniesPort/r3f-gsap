import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Experience } from "./components/Experience";
import { Overlay } from "./components/Overlay";

function App() {
  return (
    <Canvas>
      {/* pages: スクロールするページ数, damping: 滑らかさ */}
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Experience />
      </ScrollControls>
      <ambientLight color={"#d9afd9"} intensity={0.3} />
      <directionalLight intensity={0.6} position={[0, 2, 1]} />
    </Canvas>
  );
}

export default App;
