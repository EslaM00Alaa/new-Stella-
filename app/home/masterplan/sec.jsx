"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Image from "next/image";

import mp1 from "../../../public/dessign1.jpeg"; 
import mp2 from "../../../public/dessign2.jpeg"; 

const masterplanData = {
  stages: [
    { name: "Sea View 1", terraces: 3 },
    { name: "Sea View 2", terraces: 6 },
  ],
  totalTerraces: 19,
  beachLength: "930 م",
  depth: "506 م",
};

const MasterplanSection = () => {
  return (
    <section id="masterplan" className="bg-[#eee] py-16 lg:py-20">
      <div className="w-11/12 lg:w-10/12 mx-auto text-right">

        {/* Title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0d375c] mb-12 lg:mb-16 relative w-fit mx-auto lg:mx-0 text-center lg:text-right"
        >
          المخطط العام للقرية
          <span className="absolute left-1/2 lg:left-0 -bottom-2 lg:-bottom-3 w-24 lg:w-56 h-1 bg-[#d5a055] rounded-full -translate-x-1/2 lg:translate-x-0"></span>
        </motion.h2>

        {/* Main Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

          {/* Right Div - Cards */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-6/12 flex flex-col space-y-3 lg:space-y-4"
          >
            <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold text-[#0d375c] mb-2 lg:mb-4">تفاصيل المراحل</h3>

            {masterplanData.stages.map((stage, idx) => (
              <div key={idx} className="bg-white p-3 sm:p-4 rounded shadow hover:shadow-lg transition hover:scale-105">
                <h4 className="font-bold text-[#d5a055] text-sm sm:text-base">{stage.name}</h4>
                <p className="text-gray-700 text-xs sm:text-sm">عدد المصاطب: {stage.terraces}</p>
              </div>
            ))}

            {/* Stats */}
            <div className="bg-white p-3 sm:p-4 rounded shadow hover:shadow-lg transition hover:scale-105">
              <h4 className="font-bold text-[#d5a055] text-sm sm:text-base">إجمالي المصاطب</h4>
              <p className="text-gray-700 text-xs sm:text-sm">{masterplanData.totalTerraces}</p>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded shadow hover:shadow-lg transition hover:scale-105">
              <h4 className="font-bold text-[#d5a055] text-sm sm:text-base">طول الشاطئ</h4>
              <p className="text-gray-700 text-xs sm:text-sm">{masterplanData.beachLength}</p>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded shadow hover:shadow-lg transition hover:scale-105">
              <h4 className="font-bold text-[#d5a055] text-sm sm:text-base">عمق المشروع</h4>
              <p className="text-gray-700 text-xs sm:text-sm">{masterplanData.depth}</p>
            </div>

          </motion.div>

          {/* Left Div - Images */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-6/12 flex flex-col gap-3 lg:gap-4"
          >
            <Image
              src={mp1}
              alt="Masterplan New Stella Sea View"
              className="w-full h-auto max-h-44 sm:max-h-72 lg:max-h-56 rounded shadow-lg "
            />
            <Image
              src={mp2}
              alt="Terraces illustration"
              className="w-full h-auto max-h-44 sm:max-h-72 lg:max-h-56 rounded shadow-lg "
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MasterplanSection;
