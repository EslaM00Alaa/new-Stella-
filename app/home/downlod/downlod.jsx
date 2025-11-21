"use client";
import React from "react";
import { FaGooglePlay, FaAppStoreIos, FaClock, FaGift, FaUserPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Dawnlods = () => {
  return (
    <section
      id="downloads"
      className="w-11/12 lg:w-10/12 mx-auto my-16 py-12 text-[#35394d]"
    >
      {/* Title */}
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold mb-3 text-[#e0a14b]">
          حمّل تطبيق المهندس
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          تطبيق خاص بعروض <span className="text-[#e0a14b] font-semibold">شركة المهندس</span> — 
          عروض محدودة المدة 🔥  
          سجّل الآن من التطبيق واحجز عرضك قبل ما يفوتك!
        </p>
      </motion.div>

      {/* Download Buttons */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-6"
      >
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#111] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
        >
          <FaGooglePlay size={28} />
          <span>تحميل من Google Play</span>
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#111] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
        >
          <FaAppStoreIos size={28} />
          <span>تحميل من App Store</span>
        </a>
      </motion.div>

      {/* Features */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6 mt-14 text-center"
      >
        <div className="p-6 rounded-2xl transition hover:bg-gray-50">
          <FaGift size={40} className="mx-auto mb-3 text-[#111]" />
          <h3 className="text-xl font-semibold mb-2 text-[#111]">عروض حصرية</h3>
          <p className="text-sm text-gray-600">
            استمتع بأحدث العروض الخاصة بشركة المهندس مباشرة من التطبيق.
          </p>
        </div>

        <div className="p-6 rounded-2xl transition hover:bg-gray-50">
          <FaClock size={40} className="mx-auto mb-3 text-[#111]" />
          <h3 className="text-xl font-semibold mb-2 text-[#111]">مدة محدودة</h3>
          <p className="text-sm text-gray-600">
            كل عرض له مدة زمنية محدودة — الحق العرض قبل ما ينتهي ⏰
          </p>
        </div>

        <div className="p-6 rounded-2xl transition hover:bg-gray-50">
          <FaUserPlus size={40} className="mx-auto mb-3 text-[#111]" />
          <h3 className="text-xl font-semibold mb-2 text-[#111]">تسجيل سهل وسريع</h3>
          <p className="text-sm text-gray-600">
            سجّل حسابك بخطوات بسيطة واحصل على العروض فورًا من التطبيق.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Dawnlods;
