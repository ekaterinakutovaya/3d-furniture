import Hero from "@/features/Hero";
import Steps from "@/features/Steps";
import Showcase from "@/features/Showcase";
import Categories from "@/features/Categories";
import ItemsList from "@/features/ItemsList";

export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto bg-white overflow-hidden">
      <Hero />
      <Steps />
      <Showcase />
      {/*<Categories />*/}
      <ItemsList />
      <div className="h-[3000px]"></div>
    </main>
  );
}
