import { steps } from "@/constants";
import { RiArrowRightLine } from "@remixicon/react";

const Steps = () => {
  return (
    <section className="steps mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
          {steps.map((item) => (
            <div key={item.title} className="steps__step text-center">
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="h3 mb-5">{item.title}</h3>
              <p className="mb-5 max-w-md mx-auto">{item.text}</p>
              <a href="" className="font-medium flex justify-center gap-2">
                Read more
                <RiArrowRightLine className="text-accent" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
