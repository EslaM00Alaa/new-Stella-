"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import bg from "../../../public/sec.jpg";

const SectionImage = () => {
  return (
    <section className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden">

      {/* Background Image */}
      <Image
        src={bg}
        alt="Activities Section"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Layer */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-white text-center max-w-3xl space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.4]">
            استمتع بوقتك… واصنع ذكريات لا تُنسى
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl leading-[1.9] opacity-95">
            اجمع أسرتك واستمتعوا بأجواء مليئة بالمرح والراحة.  
            أنشطة متنوعة تناسب كل الأعمار.  
            لحظات مثالية تنتظركم على الشاطئ وفي قلب الطبيعة.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionImage;
