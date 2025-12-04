"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const contactDetails = [
  {
    icon: <FaLocationDot />,
    label: "العنوان",
    value: " السخنة – الزعفرانة في منطقة جنوب الدرج",
  },
  {
    icon: <MdEmail />,
    label: "البريد الإلكتروني",
    value: "info@Stella.com",
  },
  {
    icon: <IoCall />,
    label: "ادارة المبيعات",
    value: "01222172370",
  },
];

const Contactus = () => {
  return (
    <section id="contact" className="py-20">

      {/* عنوان القسم */}
      <div className="text-center mb-16 w-11/12 lg:w-8/12 mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-semibold text-gray-800 w-fit relative mx-auto text-center"
        >
          تواصل معنا
          <span className="absolute left-1/2 -bottom-3 w-28 h-1 bg-[#d5a055] rounded-full -translate-x-1/2"></span>
        </motion.h2>
      </div>

      {/* معلومات التواصل */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-11/12 lg:w-8/12 mx-auto"
        dir="rtl"
      >
        {contactDetails.map((item, idx) => (
          <motion.div
            variants={fadeIn("up", idx * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            key={idx}
            className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/10"
          >
            <span className="p-4 rounded-full bg-[#d5a055] text-gray-100 text-2xl">
              {item.icon}
            </span>

            <div className="text-right">
              <h3 className="font-bold text-gray-800">{item.label}</h3>
              <p className="text-gray-500">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* الخريطة */}
      <div className="w-11/12 lg:w-8/12 mx-auto mt-12">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg border border-white/10"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3478.537279969822!2d32.59935258490162!3d29.325245982149685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDE5JzMwLjkiTiAzMsKwMzUnNDkuOCJF!5e0!3m2!1sar!2seg!4v1763905319873!5m2!1sar!2seg"
            className="w-full h-[350px] md:h-[450px]"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contactus;
