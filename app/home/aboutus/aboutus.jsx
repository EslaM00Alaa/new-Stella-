"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";   // ← استخدم الحركة الجديدة
import Image from "next/image";
import Link from "next/link";
import Details from "@/app/_components/button/btn";

import txt from "../../../public/txtlogo.png";
import icon from "../../../public/cropped-logo_star-80x80.png";

const stats = [
  { number: "471,000 م²", label: "إجمالي مساحة المشروع" },
  { number: "2123", label: "وحدة سياحية مطلة على البحر" },
  { number: "930 م", label: "طول الواجهة البحرية" },
  { number: "506 م", label: "عمق المشروع داخل اليابسة" },
  { number: "4 مراحل", label: "باستخدام 19 مصطبة مختلفة" },
];


const AboutIntro = () => {
  return (
    <div className="bg-[#eee] py-5">
      <section id="about" className="w-11/12 lg:w-10/12 mx-auto my-20">
        
        {/* Title */}
        <motion.h2
          variants={fadeIn("up",0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-semibold text-[#0d375c] mb-16 w-fit relative mx-auto lg:mx-0 text-center lg:text-right"
        >
          من نحن
          <span className="absolute left-1/2 lg:left-0 -bottom-4 w-16 h-1 bg-[#d5a055] rounded-full -translate-x-1/2 lg:translate-x-0"></span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Text */}
          <motion.p
           variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-6/12 text-lg lg:text-2xl text-center lg:text-start text-gray-600 leading-relaxed"
          >
            نيو ستيلا سي فيو – جنوب الدرج هي قرية سياحية راقية تم تصميمها بنظام المصاطب لضمان إطلالات بحرية مميزة، وتوفر بيئة هادئة تجمع بين جمال الطبيعة وروعة التخطيط المعماري
          </motion.p>

          {/* Images */}
          <motion.div
             variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-6/12 flex items-center justify-center lg:justify-end"
          >
            <div className="flex items-center justify-center">
              <Image src={txt} alt="Text Logo" className="w-72 lg:w-96 h-auto" />
              <Image src={icon} alt="Icon Logo" className="w-16 sm:w-8 lg:w-16 h-auto" />
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeIn("up",0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start my-6"
        >
          <Link href="/about">
            <Details className="ml-auto" />
          </Link>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-20 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up",0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <h4 className="text-2xl font-bold text-[#d5a055]">{stat.number}</h4>
              <p className="text-gray-700 mt-2 text-base lg:text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default AboutIntro;
