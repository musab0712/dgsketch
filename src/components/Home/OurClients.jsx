import React from "react";
import { clients } from "../../constants/index";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function OurClients() {
  return (
    <section className="w-full  px-4 py-20 pl-28">
      <h1 className=" text-4xl font-bold text-center pb-12">Our Clients</h1>
      <div className="">
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
            {clients.map((client, i) => (
              <SwiperSlide key={i}>
                <div className="col">
                  <div>
                    <img
                      src={client.imgURL}
                      width={100}
                      height={100}
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
