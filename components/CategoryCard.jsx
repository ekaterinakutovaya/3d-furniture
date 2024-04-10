import React from "react";
import { RiArrowRightSLine } from "@remixicon/react";

const CategoryCard = ({ title, subtitle, img }) => {
  return (
    <div className="w-full max-w-[548px] h-full mx-auto">
      <img className="mb-6" src="assets/work/01.png" alt="" />
      <div className="flex justify-between items-center w-full">
        <div>
          <h3 className="h3">Modern Kitchen</h3>
          <p>Decor/Architecture</p>
        </div>
        <button className="bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full flex justify-center items-center">
          <RiArrowRightSLine size={36} className="text-primary pl-1" />
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
