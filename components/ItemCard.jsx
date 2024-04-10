import React from "react";
import { RiArrowRightLine, RiArrowRightSLine } from "@remixicon/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ItemCard = ({ title, subtitle }) => {
  return (
    <div className="news__item w-full max-w-[382px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0">
      <div className="mb-5 w-[340px] h-[290px] rounded-[52px] overflow-hidden relative">
        <Image
          fill
          src="/assets/products/product001.jpg"
          alt="product"
          className="w-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center gap-[20px]">
        <h3 className="h3">Garden Chair</h3>
        <div className="flex flex-col justify-center items-center gap-[20px]">
          <p className="text-md font-semibold">$ 350.00</p>
          <Button variant="defaultSm" size="sm">
            View <RiArrowRightLine className="text-accent" />
          </Button>
          {/*<button className="bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:bg-white transition-all flex justify-center items-center">*/}
          {/*  <RiArrowRightSLine size={36} className="text-primary pl-1" />*/}
          {/*</button>*/}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
