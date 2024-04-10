"use client";

import { RiArrowRightLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";

import CustomCanvas from "@/components/CustomCanvas";
import { Chair001 } from "@/components/items/Chair001";
import Customizer from "@/components/Customizer";

const Showcase = () => {
  return (
    <section className="mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container lg:h-[750px] mx-auto xl:px-0">
        <div className="w-full flex flex-col xl:flex-row text-center xl:text-left justify-between items-center gap-6 xl:gap-[74px]">
          <div className="w-full lg:w-1/2 flex-1 order-2 xl:order-none max-w-xl xl:max-w-[410px] flex flex-col items-center xl:items-start gap-8 pt-10 lg:pt-0">
            <h2 className="h2">Craft Your Dream</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>

            <Button variant="default">
              Start customizing <RiArrowRightLine className="text-accent" />
            </Button>
          </div>

          <div className="w-full lg:w-1/2 h-[350px] lg:h-[750px] order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-none xl:mx-0">
            <CustomCanvas>
              <Chair001 scale={0.11} position={[0, -4, 0]} />
            </CustomCanvas>

            <Customizer furnitureId={1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
