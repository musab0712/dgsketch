import { Button, Carousel } from "flowbite-react";
import marketing from "../../assets/img/marketing.svg";

export default function HeroSection() {
  return (
    <section className="px-4 py-10 md:px-8 w-full h-auto hero-section-1">
      <div className="md:px-8 flex h-full flex-col md:flex-row ">
        <div className=" w-full pt-10  md:pt-28 md:w-1/2 flex flex-col items-center md:items-start">
          <div className=" pb-10 text-center md:text-left">
            <h1 className=" pb-6  text-5xl font-bold">
              <span className="text-red-700">Result Based </span> Digital
              Marketing Agency
            </h1>
            <p className=" text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              fuga, consectetur voluptas adipisci incidunt amet. Nam.
            </p>
          </div>
          <div className="flex gap-3">
            <Button size="lg" className=" rounded-full">
              Get Started
            </Button>
            <Button size="lg" className=" rounded-full">
              Book A Meeting
            </Button>
          </div>
        </div>
        <div className=" w-full md:w-1/2 p-5 flex justify-center">
          <img src={marketing} alt="heroImg-1" className=" w-4/5 md:w-full " />
        </div>
      </div>
    </section>
  );
}
