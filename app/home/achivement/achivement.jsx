"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { getTop3Achievements } from "../../_apis/achivements";
import { URL } from "@/app/_apis/baseUrl";

const Achievement = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getTop3Achievements();
     
      if (data && Array.isArray(data)) {
        setAchievements(data);
      } else {
        console.error("Unexpected achievements data:", data);
        setAchievements([]);
      }
    };
    getData();
  }, []);

  return (
    <section id="achievements" className="w-11/12 lg:w-10/12 mx-auto my-20">
      <motion.h2
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl lg:text-4xl font-semibold text-gray-700 text-center mb-12"
      >
        سابقة أعمالنا
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <Link key={a._id || `achievement-${i}`} href={`/achievment/${a._id}`}>
        <motion.div
          variants={fadeIn("up", i * 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-4 duration-300 transition-all text-right rtl"
        >
          <div className="w-full h-56 relative">
            <Image
              src={a?.cover ? `${URL}${a.cover}` : "/placeholder.jpg"}
              alt={a?.name || "Achievement"}
              fill
              className=""
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={i < 3} // only prioritize first few images
            />
          </div>

          <div className="p-5 space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-[#e0a14b]">
                {a?.name || "—"}
              </h3>
                <div className="flex items-center gap-1 mt-3">
                {a.rate}
                <FaStar className="text-[#e0a14b] ml-1" />
                </div>
            </div>

            <p className="text-gray-600 text-sm">📍 {a?.location?.name || "—"}</p>
            <div className="text-sm text-gray-700 mt-2 space-y-1">
              <p>📐 المساحة: {a?.area || "—"}</p>
              <p>🏢 عدد الوحدات: {a?.nunits || "—"}</p>
              <p>
                📅 من: {a?.startDate || "—"} - إلى: {a?.endDate || "—"}
              </p>
            </div>
          </div>
        </motion.div>

          </Link>
        ))}
      </div>

      <div className="w-full flex justify-center mt-12">
        <Link
          href="/achievments"
          className="py-3 px-10 text-xl bg-gray-700 hover:bg-gray-800 text-white font-bold rounded-full transition-all duration-300 shadow-lg"
        >
          المزيد
        </Link>
      </div>
    </section>
  );
};

export default Achievement;
