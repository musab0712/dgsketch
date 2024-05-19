import React from "react";
import TestimonialSlider from "./TestimonialSlider";

export default function Testimonial() {
  return (
    <section className="w-full px-4 py-10 md:px-8 md:pt-20">
      <div>
        <h3 className="text-lg pb-3 text-center">TESTIMONIALS</h3>
        <h1 className=" text-4xl font-bold text-center">
          What <span className="text-red-600">Clients</span> Say About Us
        </h1>
      </div>
      <div>
        <TestimonialSlider />
      </div>
    </section>
  );
}
