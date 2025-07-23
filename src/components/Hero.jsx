// src/components/Hero.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import heroimg1 from "../assets/room.jpg";
import heroimg2 from "../assets/room.jpg";
import heroimg3 from "../assets/room.jpg";

const slides = [
  {
    image: heroimg1,
    title: "Not Just a PG – A Better Way to Live",
    subtitle: "Modern Living Spaces in the Heart of Saltlake Sector 5",
  },
  {
    image: heroimg2,
    title: "Your Home Away From Home",
    subtitle: "Safe, Hygienic, and Hassle-Free Living for Students & Professionals",
  },
  {
    image: heroimg3,
    title: "Affordable Comfort, Uncompromised Quality",
    subtitle: "Fully Furnished | Great Food | Great Vibes",
  },
];



const Hero = () => {
  return (
    <div className="w-full h-[90vh] relative overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full min-h-screen min-w-screen bg-cover bg-center relative  items-center justify-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>

              <div className="absolute flex flex-col items-center justify-center min-h-screen min-w-screen z-10 text-white ">
                <h1 className="w-full text-3xl md:text-3xl sm:text-xl text-center font-bold mb-4 drop-shadow-lg text-shadow-md text-shadow-gray-700">
                  {slide.title}
                </h1>
                <p className="text-md md:text-2xl text-center drop-shadow text-shadow-md text-shadow-gray-700 max-w-[60vw]">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
