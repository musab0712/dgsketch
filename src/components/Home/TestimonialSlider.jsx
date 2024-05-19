import { useState } from "react";
import { testimonials } from "../../constants/index";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className=" relative overflow-hidden">
        <div className=" h-96">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transform transition-transform duration-500 ease-in-out ${
                index === currentIndex ? "translate-x-0" : "translate-x-full"
              } absolute w-full h-full flex flex-col items-center justify-center text-center bg-white p-4 rounded-lg`}
            >
              <img
                src={testimonial.img}
                alt="img"
                width={65}
                height={55}
                className=" pb-3"
              />
              <p className="text-lg italic">"{testimonial.quote}"</p>
              <p className="mt-2 font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
