import { Button } from "flowbite-react";
import { motion } from "framer-motion";

export default function HeroSection({ title, description, img }) {
  return (
    <section className="px-4 py-10 md:px-8 w-full h-auto md:h-[500px] hero-section-1">
      <div className="md:px-8 flex h-full flex-col md:flex-row ">
        <div className=" w-full pt-10  md:pt-28 md:w-1/2 flex flex-col items-center md:items-start">
          <div className=" pb-10 text-center md:text-left">
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
              className=" pb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  text-red-700"
            >
              <p>{title}</p>
            </motion.div>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
                duration: 1,
              }}
              className=" text-lg font-semibold"
            >
              {description}
            </motion.p>
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="flex gap-3"
          >
            <Button size="lg" className=" rounded-full">
              Get Started
            </Button>
            <Button size="lg" className=" rounded-full ">
              Book A Meeting
            </Button>
          </motion.div>
        </div>
        <div className=" w-full md:w-1/2 p-5 flex justify-center">
          <motion.img
            src={img}
            width={100}
            height={100}
            alt="heroImg-1"
            className=" w-4/5 md:w-full "
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          />
        </div>
      </div>
    </section>
  );
}
