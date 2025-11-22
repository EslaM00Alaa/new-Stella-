"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Image from "next/image";

import ac1 from "../../../public/ac1.jpeg";
import ac2 from "../../../public/ac2.jpeg";
import ac3 from "../../../public/ac3.jpeg";
import ac4 from "../../../public/ac4.jpeg";

const items = [
  { title: "حمامات السباحة", img: ac1 },
  { title: "منطقة الأطفال", img: ac2 },
  { title: "المطاعم والكافيهات", img: ac3 },
  { title: "الشاطئ الخاص", img: ac4 },
];

const Activity = () => {
  return (
    <section className="bg-[#092741] py-20 px-4">
      <div className="w-11/12 lg:w-10/12 mx-auto text-right text-white">

        {/* Title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold mb-4 relative w-fit mx-auto lg:mx-0 text-center lg:text-right"
        >
          الأنشطة والخدمات
          <span className="absolute left-1/2 lg:left-0 -bottom-3 w-24 h-1 bg-[#9d8244] rounded-full -translate-x-1/2 lg:translate-x-0"></span>
        </motion.h2>

        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-lg opacity-90 mt-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-right"
        >
          استمتع بتجربة متكاملة داخل المنتجع تضم مجموعة متنوعة من الأنشطة والاستمتاع بجميع المرافق والخدمات.
        </motion.p>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", (i + 1) * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded shadow-lg cursor-pointer"
            >
              <Image
                src={item.img}
                alt={item.title}
                className="w-full h-64  transition duration-500 group-hover:scale-110"
              />

              {/* Dark Layer */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

              {/* Text */}
              <div className="absolute bottom-4 right-4 text-xl font-semibold">
                {item.title}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Activity;
