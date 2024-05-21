import { Button } from "flowbite-react";
import bg from "../../assets/img/ai.svg";
import { motion } from "framer-motion";

export default function AboutMain() {
  return (
    <section className="px-4 md:px-8 py-6 md:py-10 w-full h-auto">
      <div className="md:px-8 flex h-full flex-col md:flex-row">
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
          className=" w-full pt-10 md:pt-28 md:w-1/2 flex flex-col items-center md:items-start"
        >
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
        </motion.div>
        <div className=" w-full md:w-1/2 p-5 flex justify-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            src={bg}
            alt="bg"
            className=" w-4/5 md:w-full "
          />
        </div>
      </div>
    </section>
  );
}
