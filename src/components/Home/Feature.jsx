import { Button } from "flowbite-react";
import { FeatureCard } from "./FeatureCard";
import { features } from "../../constants/index";
import { motion } from "framer-motion";

export default function Feature() {
  return (
    <>
      <section className=" px-4 md:px-8 py-6 md:py-16 bg-slate-200">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="pb-10 w-full flex flex-col items-center "
        >
          <h3 className="text-lg pb-3">FEATURES</h3>
          <h1 className="text-center text-5xl font-bold pb-5">
            We are <span className=" text-red-600">different</span> because...
          </h1>
          <p className=" text-lg md:w-1/2 text-center pb-8">
            Pleasure rationally encounter consequences that are extremely
            painful. Nor again is there anyone who loves or pursues or desires
            to obtain
          </p>
          <Button size="lg" className=" rounded-full ">
            Get Started
          </Button>
        </motion.div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((item, index) => (
            <FeatureCard
              key={index}
              title={item.title}
              detail={item.detail}
              imgSrc={item.imgSrc}
            />
          ))}
        </div>
      </section>
    </>
  );
}
