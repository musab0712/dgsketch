import { Button } from "flowbite-react";
import bg from "../../assets/img/ai.svg";
export default function AboutMain() {
  return (
    <section className="px-4 md:px-8 py-6 md:py-16 w-full h-auto">
      <div className="md:px-8 flex h-full flex-col md:flex-row">
        <div className=" w-full pt-10 md:pt-28 md:w-1/2 flex flex-col items-center md:items-start">
          <h3 className="text-lg pb-3">ABOUT US</h3>
          <h1 className="text-center md:text-left text-5xl font-bold pb-5">
            Best <span className=" text-red-600">Digital Agency</span> in the
            Town
          </h1>
          <p className=" text-lg font-semibold pb-3">
            Pleasure rationally encounter consequences that are extremely
            painful. Nor again is there anyone who loves or pursues or desires
            to obtain
          </p>
          <p className=" text-lg font-semibold pb-5">
            Pleasure rationally encounter consequences that are extremely
            painful. Nor again is there
          </p>
          <Button size="lg" className=" rounded-full">
            Learn More
          </Button>
        </div>
        <div className=" w-full md:w-1/2 p-5 flex justify-center">
          <img src={bg} alt="bg" className=" w-4/5 md:w-full " />
        </div>
      </div>
    </section>
  );
}
