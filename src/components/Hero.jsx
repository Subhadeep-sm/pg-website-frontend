// src/components/Hero.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import heroimg1 from "../assets/hero.png";
import heroimg2 from "../assets/hero.png";
import heroimg3 from "../assets/hero.png";

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
    <div className="w-full h-[60vh] md:h-[70vh] relative overflow-hidden">
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
              className="w-full h-full bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>

              <div className="relative z-10 text-white text-center px-4">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-lg lg:text-xl drop-shadow-md max-w-4xl mx-auto">
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