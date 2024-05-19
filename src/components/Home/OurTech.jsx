import React from "react";
import { techs } from "../../constants/index";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/autoplay";
export default function OurTech() {
  return (
    <section className="w-full  px-4 py-8 md:px-8 md:py-20">
      <h1 className=" text-red-600 text-4xl font-bold text-center pb-12">
        Our Tech
      </h1>
      <div className="md:pl-28">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView="auto"
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {techs.map((tech, i) => (
              <SwiperSlide key={i}>
                <div className="col">
                  <div>
                    <img
                      src={tech.imgURL}
                      width={80}
                      height={80}
                      alt="Tech img"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
}
