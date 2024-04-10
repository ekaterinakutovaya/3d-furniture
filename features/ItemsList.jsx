import React from "react";
import ItemCard from "@/components/ItemCard";

const ItemsList = () => {
  return (
    <section className="news mt-[80px] xl:mt-[150px] relative z-20">
      <div className="container mx-auto px-0">
        <div className="max-w-[810px] mx-auto text-center mb-[52px]">
          <h2 className="news__title h2 mb-3">We Love Trend</h2>
          <p className="news__subtitle">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using.
          </p>
        </div>

        <div className="news__grid grid grid-cols-1 xl:grid-cols-3 gap-[27px]">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </section>
  );
};

export default ItemsList;
