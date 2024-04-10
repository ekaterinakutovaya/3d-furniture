"use client";

import { useGLTF } from "@react-three/drei";
import useFurnitureStore from "@/store/useFurnitureStore";
import { useEffect, useState } from "react";
import { colors } from "@/constants";

export function Chair001(props) {
  const { nodes, materials } = useGLTF("./models/scene.gltf");

  const [fabricColor, setFabricColor] = useState(null);

  const furnitureItem = useFurnitureStore((state) =>
    state.furniture.find((f) => f.id === 1),
  );

  if (!furnitureItem) return <div>No furniture found with ID 1</div>;

  useEffect(() => {
    const color = colors.find((item) => item.id === furnitureItem.colorId);
    setFabricColor(color.color);
  }, [furnitureItem]);

  return (
    <group {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Doris_Armchair_FABRIC_0.geometry}
          material={materials.FABRIC}
          material-color={fabricColor}
        ></mesh>
        <mesh
          geometry={nodes.Doris_Armchair_WOOD_0.geometry}
          material={materials.WOOD}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/scene.gltf");
