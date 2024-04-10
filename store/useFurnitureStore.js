// useFurnitureStore.js
import create from "zustand";

const useFurnitureStore = create((set) => ({
  furniture: [
    {
      id: 1,
      name: "Doris Armchair, Shetland Moss",
      colorId: 4,
      material: "Fabric",
    },
    {
      id: 2,
      name: "Modern Sofa",
      colorId: 3,
      material: "Leather",
    },
  ],
  getFurnitureById: (id) =>
    set((state) => state.furniture.find((f) => f.id === id)),
  addFurniture: (furnitureItem) =>
    set((state) => ({ furniture: [...state.furniture, furnitureItem] })),
  setFurnitureParameter: (furnitureId, param, value) =>
    set((state) => {
      const furnitureIndex = state.furniture.findIndex(
        (f) => f.id === furnitureId,
      );
      if (furnitureIndex === -1) {
        return;
      }

      const updatedFurniture = [...state.furniture];
      updatedFurniture[furnitureIndex] = {
        ...updatedFurniture[furnitureIndex],
        [param]: value,
      };

      return { furniture: updatedFurniture };
    }),
}));

export default useFurnitureStore;
