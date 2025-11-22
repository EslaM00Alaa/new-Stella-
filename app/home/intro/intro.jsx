"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Link from "next/link";
import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// Images
import bg1 from "../../../public/images/a1.jpeg";
import bg2 from "../../../public/images/a2.jpg";
import bg3 from "../../../public/images/a5.jpeg";
import bg4 from "../../../public/images/a10.jpeg";
import bg5 from "../../../public/images/a11.jpg";

const slides = [
  {
    image: bg1,
    title: "New Stella Di Mare Sea View",
    subtitle: "منتجع سياحي راقي",
    desc: "شاليهات بإطلالة مباشرة على البحر وخدمات فندقية.",
  },
  {
    image: bg2,
    title: "New Stella Di Mare Sea View",
    subtitle: "استمتع بالخصوصية والهدوء",
    desc: "مساحات خضراء واسعة وخدمات متكاملة.",
  },
  {
    image: bg3,
    title: "New Stella Di Mare Sea View",
    subtitle: "وجهتك المثالية للعطلات",
    desc: "رفاهية وإطلالات بحرية ساحرة.",
  },
  {
    image: bg4,
    title: "New Stella Di Mare Sea View",
    subtitle: "حياة على البحر",
    desc: "شاليهات بتصميمات عصرية وموقع مميز.",
  },
  {
    image: bg5,
    title: "New Stella Di Mare Sea View",
    subtitle: "استثمر في الهدوء والراحة",
    desc: "خدمات فندقية… وإطلالة لا تُقارن.",
  },
];

const Intro = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-screen w-full">
      {/* Swiper Background Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen w-full">
              {/* Next.js Image with fill: parent must be relative */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />

              {/* Dark Layer */}
              <div
        className="absolute inset-0 
        bg-gray-900/75
        lg:bg-transparent
        lg:bg-gradient-to-l
        lg:from-gray-900/75
        lg:via-gray-900/65
        lg:to-gray-900/10"
      ></div>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Static (overlay) Content - changes with activeIndex */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <div className="text-white w-full lg:w-10/12 text-center lg:text-right space-y-4 lg:space-y-6">
          {/* small subtitle */}
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide"
          >
            مرحباً بكم في
          </motion.p>

          {/* Title */}
          <motion.h1
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug"
          >
            <span className="text-[#9d8244] block w-10/12 mx-auto lg:mx-0">
              {slides[activeIndex].title}
            </span>

            <span className="block mt-2 opacity-90">
              {slides[activeIndex].subtitle}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 opacity-95"
          >
            {slides[activeIndex].desc}
          </motion.p>

          {/* CTA (fixed) */}
          <Link href="#contact">
            <motion.button
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              animate="show"
              className="
                py-3 px-12
                text-lg sm:text-xl lg:text-2xl
                font-bold
                rounded-2xl text-white
                bg-gradient-to-l from-[#0d375c] to-transparent
                transition duration-300
                hover:brightness-110 hover:scale-105 hover:shadow-lg
              "
            >
              احجز وحدتك الآن
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
