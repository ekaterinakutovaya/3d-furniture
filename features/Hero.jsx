import { RiArrowRightLine } from "@remixicon/react";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero h-[640px] xl:h-[840px] bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20">
      <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
        <div className="hero__text w-[567px] flex flex-col items-center text-center xl:text-left lg:items-start">
          <h1 className="h1 mb-8">Welcome to Your Perfect Space</h1>
          <p className="mb-8">
            Customize our range of furniture to perfectly match your taste and
            space requirements.
          </p>

          <Button variant="default">
            Start customizing <RiArrowRightLine className="text-accent" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
