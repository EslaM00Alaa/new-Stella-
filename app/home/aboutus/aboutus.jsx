"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Image from "next/image";
import Link from "next/link";
import Details from "@/app/_components/button/btn";

import txt from "../../../public/txtlogo.png";
import icon from "../../../public/cropped-logo_star-80x80.png";

const stats = [
  { number: "12+", label: "عامًا من الخبرة السياحية" },
  { number: "7", label: "مراحل تطوير داخل القرية" },
  { number: "450+", label: "شاليه مطل على البحر" },
  { number: "15+", label: "حمام سباحة بمستويات مختلفة" },
  { number: "200,000 م²", label: "مساحات خضراء وخدمات" },
];

const AboutIntro = () => {
  return (
    <div className="bg-[#eee] py-12">
      <section id="aboutus" className="w-11/12 lg:w-10/12 mx-auto my-20">
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl lg:text-4xl font-semibold text-[#0d375c] mb-16 w-fit relative mx-auto lg:mx-0 text-center lg:text-right"
      >
        من نحن
        {/* خط أسفل العنوان */}
        <span className="absolute left-1/2 lg:left-0 -bottom-4 w-16 h-1 bg-[#9d8244] rounded-full -translate-x-1/2 lg:translate-x-0"></span>
      </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-6/12">
            <motion.p
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-lg lg:text-2xl text-center lg:text-start text-gray-600 leading-relaxed"
            >
             
              هي واحدة من أرقى القرى السياحية على ساحل البحر الأحمر،  
              حيث نقدم تجربة معيشية متكاملة تجمع بين الهدوء، الرفاهية،  
              وإطلالات بحرية مذهلة تجعل كل لحظة أجمل من السابقة.
            </motion.p>
          </div>

          {/* Images */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-6/12 flex items-center justify-center lg:justify-end"
          >
            <div className="flex  lg:flex sm:flex-row items-center justify-center ">
              <Image
                src={txt}
                alt="Text Logo"
                className="w-72  lg:w-96 h-auto"
              />
              <Image
                src={icon}
                alt="Icon Logo"
                className="w-16 sm:w-8 lg:w-16 h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start my-6"
        >
          <Link href={"/about"}>
            <Details className="ml-auto" />
          </Link>
        </motion.div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-20 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <h4 className="text-2xl font-bold text-[#9d8244]">{stat.number}</h4>
              <p className="text-gray-700 mt-2 text-base lg:text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutIntro;
