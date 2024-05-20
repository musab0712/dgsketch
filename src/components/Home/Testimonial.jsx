import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section className="w-full px-4 py-10 md:px-8 md:pt-20">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.6,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
      >
        <h3 className="text-lg pb-3 text-center">TESTIMONIALS</h3>
        <h1 className=" text-4xl font-bold text-center">
          What <span className="text-red-600">Clients</span> Say About Us
        </h1>
      </motion.div>
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
      >
        <TestimonialSlider />
      </motion.div>
    </section>
  );
}
