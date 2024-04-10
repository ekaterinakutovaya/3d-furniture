import CategoryCard from "@/components/CategoryCard";

const Categories = () => {
  return (
    <section className="work mt-[80px] xl:mt-[150px] relative z-20">
      <div className="container mx-auto xl:px-0">
        <div className="text-center mb-24">
          <h2 className="work__title h2 mb-4">Follow Our Projects</h2>
          <p className="work__subtitle max-w-3xl mx-auto">
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>

        <div className="work__grid grid grid-cols-1 xl:grid-cols-2 gap-x-[104px] gap-y-[56px]">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </section>
  );
};

export default Categories;
