import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../../constants/index";
import { motion } from "framer-motion";

export default function ServiceMain() {
  return (
    <section className=" px-4 py-6 md:py-16 md:px-8 w-full  bg-slate-200">
      <div className="flex flex-col">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="pb-10 w-full flex flex-col items-center "
        >
          <h3 className="text-lg pb-3 text-center">SERVICES</h3>
          <h1 className="pb-6  text-5xl font-bold text-center">
            See What <span className=" text-red-700">Services</span> We Provide
            You
          </h1>
          <p className=" text-lg font-semibold text-center pb-8 md:w-1/2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quidem
            animi ad Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Id quidem animi ad
          </p>
        </motion.div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {services.map((item, index) => (
            <div key={index}>
              <ServiceCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
