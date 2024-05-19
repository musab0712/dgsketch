import React from "react";
import TestimonialSlider from "./TestimonialSlider";

export default function Testimonial() {
  return (
    <section className="w-full px-4 py-10 ">
      <div>
        <h1 className=" text-3xl font-bold text-center">
          What Clients Say About Us
        </h1>
      </div>
      <div>
        <TestimonialSlider />
      </div>
    </section>
  );
}
