"use client";

import { useEffect, useState } from "react";
import { FaStar, FaChevronLeft, FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IoMdPerson } from "react-icons/io"; // ✅ Added missing import

const defaultFeedbacks = [
  {
    name: "أحمد سمير",
    role: "مهندس مدني",
    stars: 5,
    title: "مكان هادئ ومستوى راقٍ",
    comment:
      "القرية جميلة جداً وهادئة، والمساحات الخضراء موزعة بشكل ممتاز. حسّيت إني في منتجع فعلي مش مجرد كومبوند. تجربة مميزة ومكان يستحق الاستثمار.",
  },

  {
    name: "ريم محمد",
    role: "مالكة وحدة",
    stars: 5,
    title: "إطلالة بحر لا تُنسى",
    comment:
      "الإطلالة هنا مختلفة تماماً… البحر قريب وواضح من كل ناحية. التشطيب راقي والخدمات فعلاً فندقية. خطوة ممتازة إني اشتريت وحدة هنا.",
  },

  {
    name: "خالد فؤاد",
    role: "رائد أعمال",
    stars: 5,
    title: "استثمار مضمون",
    comment:
      "سألت كتير قبل ما أشتري، والكل نصحني بالمشروع. سعر مقابل قيمة ممتاز، ومكان مناسب للإيجار السياحي. شايف إنه فرصة ذهبية حالياً.",
  },

  {
    name: "مها شريف",
    role: "موظفة بنك",
    stars: 5,
    title: "خدمة عملاء محترمة",
    comment:
      "تعامل محترم جداً من فريق المبيعات، والشرح كان واضح من أول زيارة. عجبتني الخصوصية وتوزيع الوحدات خصوصاً للعائلات.",
  },

  {
    name: "هشام عبد الله",
    role: "صاحب شركة",
    stars: 5,
    title: "راحة نفسية من أول زيارة",
    comment:
      "أول ما دخلت حسّيت براحة وهدوء… تنظيم المكان والخدمات فعلاً راقية. قررت أحجز فوراً لأن المكان مختلف عن أي كومبوند شوفته قبل كده.",
  },
];

export default function TestimonialCarousel() {
  const [feedbackss, setFeedbackss] = useState([]);
  const [curIndex, setCurIndex] = useState(1);
  const [Ar, setAr] = useState([0]);

  const getPrev = () =>
    setCurIndex((prev) => (prev > 0 ? prev - 1 : feedbackss.length - 1));

  const getNext = () =>
    setCurIndex((prev) => (prev < feedbackss.length - 1 ? prev + 1 : 0));

  useEffect(() => {
    setFeedbackss(defaultFeedbacks);

    const handleResize = () => {
      setAr(window.innerWidth >= 1024 ? [-1, 0, 1] : [0]);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!feedbackss.length) return null;

  return (
    <div dir="ltr" className="pt-32 pb-4 bg-[#eee]">
     

      <div className="relative w-full flex justify-between items-center gap-5">
        {Ar.map((offset) => {
          const index = (curIndex + offset + feedbackss.length) % feedbackss.length;
          const item = feedbackss[index];

          return (
            <motion.div
              dir="rtl"
              key={index}
              style={{ height: "420px" }}
              className={`relative bg-white rounded-lg shadow-lg px-5 flex flex-col items-center justify-center ${
                offset === 0
                  ? "lg:scale-110 z-10 w-10/12 mx-auto lg:w-4/12"
                  : "w-3/12 scale-90 opacity-70 hidden lg:flex"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: offset === 0 ? 1.1 : 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-4">
                <div className="text-5xl bg-[#f1f1f1] p-4 rounded-full text-gray-800">
                  <IoMdPerson />
                </div>
              </div>

              <h3 className="text-gray-800 text-2xl mt-4 font-semibold">{item.name}</h3>
              <p className=" text-base text-gray-500">{item.role}</p>

              <div className="w-4/12 mx-auto flex text-[#e0a14b] justify-center items-center text-2xl mt-2">
                {[...Array(Math.floor(item.stars || 0))].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <h5 className="text-xl font-bold my-2 text-gray-600">{item.title}</h5>
              <p className="text-md lg:text-lg w-11/12 mx-auto text-center text-gray-700">
                {item.comment}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="w-4/12 lg:w-2/12 mx-auto flex justify-between my-16">
        <button
          onClick={getPrev}
          className="p-4 bg-[#fff] rounded-full text-gray-800 hover:scale-105 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={getNext}
          className="p-4 bg-[#fff] rounded-full text-gray-800 hover:scale-105 transition"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}
