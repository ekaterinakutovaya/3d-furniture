"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

const CustomCanvas = ({ children }) => {
  const handleStart = () => {
    document.body.style.cursor = "grabbing";
  };

  const handleEnd = () => {
    document.body.style.cursor = "auto";
  };

  return (
    <Canvas shadows camera={{ position: [10, 10, 20], fov: 30 }}>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <OrbitControls
        autoRotate
        makeDefault
        enableZoom={false}
        onStart={handleStart}
        onEnd={handleEnd}
      />
      {children}
    </Canvas>
  );
};

export default CustomCanvas;
