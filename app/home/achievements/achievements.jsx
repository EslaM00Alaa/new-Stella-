"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useEffect, useState, useRef } from "react";
import { Autoplay } from "swiper/modules";
import star from "../../../public/logo_star_10.png";

const achievements = [
  "صيانة جذرية غير مسبوقة لعدد 13 حمّام سباحة بالمصاطب (سي فيو 2 و3).",
  "إعادة تشغيل وصيانة الحمّام الرئيسي بالكامل.",
  "إزالة الكشك الخشبي بجوار حمام السباحة الرئيسي.",
  "تركيب مساند درابزين ستانلس لكبار السن.",
  "تعاقد لتشجير القرية بـ 300 شجرة.",
  "تنفيذ سلم جديد لكبار السن بالحمام الرئيسي.",
  "إعادة دهانات شماسي البحر وتوريد 126 شمسية.",
  "تغيير جميع اللمبات التالفة لـ LED.",
  "إحلال وتجديد الفلاتر والمحابس للحمام الرئيسي.",
  "أعمال تطوير اللاندسكيب بالكامل.",
  "إعادة ملء فواصل حمامات السباحة بجراوت معتمد.",
  "صيانة 11 محول كهربائي.",
  "تركيب حاجز خصوصية للشاطئ بعدد 20 حاجز.",
  "التعاقد مع Ocean Blue لصيانة وتشغيل حمامات السباحة طوال العام.",
  "مشروع قلب ستيلا سي فيو الجديد لرفع قيمة الوحدات.",
  "تطوير نظام جمع القمامة بنظام إعادة التدوير.",
];

const Achievements = () => {
  const [maxHeight, setMaxHeight] = useState(0);
  const slidesRef = useRef([]);

  const updateMaxHeight = () => {
    if (slidesRef.current.length) {
      const heights = slidesRef.current.map((slide) =>
        slide ? slide.getBoundingClientRect().height : 0
      );
      setMaxHeight(Math.max(...heights));
    }
  };

  useEffect(() => {
    updateMaxHeight();
    window.addEventListener("resize", updateMaxHeight);
    return () => window.removeEventListener("resize", updateMaxHeight);
  }, [achievements]);

  return (
    <section id="achievements" className="relative bg-[#eee] pattern py-32 ">

      {/* ⭐ Star on left of section */}
      <motion.img
        src={star.src}
        alt="star"
        className="absolute left-4 top-10 lg:top-20 w-16 lg:w-32 opacity-40 z-0"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="w-11/12 lg:w-10/12 mx-auto text-right relative z-10">

        <motion.h2
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0d375c] mb-12 relative w-fit mx-auto lg:mx-0 text-center lg:text-right"
        >
          إنجازات الإدارة الجديدة
          <span className="absolute left-1/2 lg:left-0 -bottom-5 w-24 lg:w-56 h-1 bg-[#d5a055] rounded-full -translate-x-1/2 lg:translate-x-0"></span>
        </motion.h2>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          speed={900}
          modules={[Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="py-6"
        >
          {achievements.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                ref={(el) => (slidesRef.current[index] = el)}
                variants={fadeIn("up", index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 flex flex-col"
                style={{ minHeight: maxHeight }}
              >
                <p className="text-[#0d375c] font-semibold leading-8 text-lg flex-1">
                  {item}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Achievements;
