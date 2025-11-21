"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Image from "next/image";

import img from "../../../public/services.jpg";

const Service = () => {
  return (
    <div
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${img.src})` }}
    >
      {/* Dark Layer */}
      <div className="absolute inset-0 
     bg-gray-900/75
    lg:bg-transparent
    lg:bg-gradient-to-l
    lg:from-gray-900/75
    lg:via-gray-900/65
    lg:to-gray-900/10
      
      "></div>

      <section
        id="services"
        className="relative z-10 w-11/12 lg:w-10/12 mx-auto"
      >
        {/* Title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-semibold text-white mb-16 w-fit relative mx-auto lg:mx-0 text-center lg:text-right"
        >
          ماذا نقدم لك
          <span className="absolute left-1/2 lg:left-0 -bottom-3 w-28 h-1 bg-[#9d8244] rounded-full -translate-x-1/2 lg:translate-x-0"></span>
        </motion.h2>

        {/* Content */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-14">

          {/* Text */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-6/12 space-y-6"
          >
            <p className="text-lg lg:text-2xl text-gray-200 text-center lg:text-right leading-relaxed">
              نحن نمنحك تجربة استثنائية داخل القرية،  
              حيث تجد كل ما تحتاجه للاستجمام، الراحة،  
              والاستمتاع بأجواء بحرية فاخرة.
            </p>

            {/* List Items */}
            <ul className="space-y-4 text-gray-200 text-base text-right lg:text-lg font-medium">

              <li className="flex items-start gap-3 justify-start">
                <span className="w-3 h-3 mt-2 rounded-full bg-[#9d8244]"></span>
                <span>وحدات سكنية بإطلالات بحرية مباشرة</span>
              </li>

              <li className="flex items-start gap-3 justify-center lg:justify-start">
                <span className="w-3 h-3 mt-2 rounded-full bg-[#9d8244]"></span>
                <span>خدمات ترفيهية ومرافق شاطئية عالمية المستوى</span>
              </li>

              <li className="flex items-start gap-3 justify-center lg:justify-start">
                <span className="w-3 h-3 mt-2 rounded-full bg-[#9d8244]"></span>
                <span>مساحات خضراء وممرات مصممة للاستجمام والاسترخاء</span>
              </li>

            </ul>
          </motion.div>

          {/* Image – Optional (Hidden Background) */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden lg:flex w-full lg:w-6/12 items-center justify-end"
          >
            <Image
              src={img}
              alt="عن القرية السياحية"
              className="w-[430px] h-auto rounded shadow-2xl opacity-0"
            />
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Service;
