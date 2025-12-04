"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import bg from "../../../public/ac3.jpeg";

const Section2Image = () => {
  return (
    <section className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Activities Section"
        fill
        className=""
        priority
      />

      {/* Dark Layer */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-white text-center max-w-5xl space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.3]">
            استكشف لحظاتك… واستمتع بتجربة استثنائية في قريتنا
          </h2>

          <p className="text-lg sm:text-xl lg:text-3xl leading-[1.9] opacity-95">
            هنا ستجد الراحة، المتعة، والهدوء في مكان واحد.  
            أنشطة بحرية، مساحات خضراء، وجلسات عائلية تُشعرُك بأنك في بيتك الثاني.  
            عيش اللحظة… وخلّي يومك أحلى.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2Image;
