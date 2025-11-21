"use client";
import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';
import Link from 'next/link';
import bg from "../../../public/bg.jpg";

const Intro = () => {
  return (
    <div
      className="relative overflow-hidden h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Black Overlay */}
    <div
  className="
    absolute inset-0 z-0

    /* موبايل: خلفية ثابتة */
    bg-gray-900/75

    /* من LG وأكبر: نلغي الخلفية ونستخدم الجريدينت */
    lg:bg-transparent
    lg:bg-gradient-to-l
    lg:from-gray-900/75
    lg:via-gray-900/65
    lg:to-gray-900/10
  "
/>

      {/* Centered Content */}
     <div className="absolute inset-0 z-10 flex items-center justify-center px-4">

<div
  className="
    text-white
    w-full lg:w-10/12
    text-center lg:text-right
    space-y-4 lg:space-y-6
  "
>

  {/* Subtitle */}
  <motion.p
    variants={fadeIn('up', 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide"
  >
    مرحباً بكم في
  </motion.p>

  {/* Title */}
  <motion.h1
    variants={fadeIn('up', 0.4)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="
      text-3xl sm:text-4xl lg:text-5xl
      font-bold leading-snug
      space-y-2
    "
  >
    <span className="text-[#9d8244] block w-10/12 mx-auto lg:mx-0">
      New Stella Di Mare  Sea View
    </span>

   

    <span className="block mt-2 opacity-90">
      قرية سياحية راقية
    </span>
  </motion.h1>

  {/* Secondary Text */}
  <motion.h2
    variants={fadeIn('up', 0.6)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="text-lg sm:text-xl lg:text-3xl font-light leading-relaxed"
  >
    استمتع بالبحر… والرفاهية في مكان واحد.
  </motion.h2>

  {/* Paragraph */}
  <motion.p
    variants={fadeIn('up', 0.7)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="
      text-base sm:text-lg lg:text-xl
      max-w-2xl mx-auto lg:mx-0
      leading-loose opacity-95
    "
  >
    شاليهات مطلة على البحر،  
    مساحات خضراء، وخدمات فندقية متكاملة.
  </motion.p>

  {/* CTA Button */}
  <Link href="#contact">
    <motion.button
      variants={fadeIn('up', 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
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
