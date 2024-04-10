"use client";

import { colors } from "@/constants";
import useFurnitureStore from "@/store/useFurnitureStore";
import { useEffect, useRef } from "react";

const Customizer = ({ furnitureId }) => {
  const intervalRef = useRef(null);
  const setFurnitureParameter = useFurnitureStore(
    (state) => state.setFurnitureParameter,
  );
  const furnitureItem = useFurnitureStore((state) =>
    state.furniture.find((f) => f.id === furnitureId),
  );

  if (!furnitureItem)
    return <div>No furniture found with ID {furnitureId}</div>;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setFurnitureParameter(
        furnitureId,
        "colorId",
        getNextColorId(furnitureItem.colorId),
      );
    }, 20000);

    return () => clearInterval(intervalRef.current);
  }, [furnitureItem, setFurnitureParameter, furnitureId]);

  const getNextColorId = (currentColorId) => {
    const currentIndex = colors.findIndex(
      (color) => color.id === currentColorId,
    );
    const nextIndex = (currentIndex + 1) % colors.length;
    return colors[nextIndex].id;
  };

  const colorChangeHandler = (colorId) => {
    clearInterval(intervalRef.current);
    setFurnitureParameter(furnitureId, "colorId", colorId);
  };

  return (
    <div className="">
      <div className="colors flex items-center justify-center gap-6">
        {colors.map((item) => (
          <span
            key={item.id}
            style={{ backgroundColor: item.color }}
            className={`${item.id === furnitureItem.colorId ? "color-active" : ""} relative cursor-pointer w-[30px] h-[30px] rounded-full flex justify-center items-center`}
            onClick={() => colorChangeHandler(item.id)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Customizer;
