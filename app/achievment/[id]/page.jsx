"use client";

import React, { useEffect, useState } from "react";
import Header from "../../_components/nav/nav";
import Footer from "../../_components/footer/footer";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useParams } from "next/navigation";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { getAchievementById } from "@/app/_apis/achivements";
import { URL } from "@/app/_apis/baseUrl";

const Page = () => {
  const params = useParams();
  const id = params.id;
  const [achievement, setAchievement] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getAchievementById(id);
      setAchievement(data.data);
    };
    getData();
  }, [id]);

  if (!achievement) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">جاري التحميل...</p>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 pt-12">
      <Header flag={true}/>

      <div className="w-11/12 lg:w-10/12 mx-auto my-16 space-y-16">
        {/* اسم المشروع وصورته الرئيسية */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-6"
        >
          <div className="w-full lg:w-1/2">
            <Image
              src={`${URL}${achievement.cover}`}
              alt={achievement.name}
              width={800}
              height={500}
              className="rounded-xl shadow-md w-full h-auto"
              priority
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4 text-right">
            <h1 className="text-3xl font-bold">{achievement.name}</h1>
            <p className="text-lg">📍 {achievement.location?.name}</p>
            <p className="text-md">📐 المساحة: {achievement.area}</p>
            <p className="text-md">🏢 عدد الوحدات: {achievement.nunits}</p>
            <p className="text-md">
              📅 تاريخ البدء: {achievement.startDate} - الانتهاء:{" "}
              {achievement.endDate}
            </p>
            <div className="flex items-center gap-1 mt-3">
              {[...Array(achievement.rate || 0)].map((_, idx) => (
                <FaStar key={idx} className="text-[#e0a14b]" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* صور إضافية */}
        {achievement.images?.length > 0 && (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold mb-4 text-right">صور إضافية</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievement.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn("up", idx * 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-lg shadow"
                >
                  <Image
                    src={`${URL}${img}`}
                    alt={`صورة إضافية ${idx + 1}`}
                    width={500}
                    height={300}
                    className="w-full h-64 "
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* خريطة */}
        {achievement.location?.src && (
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold mb-2 text-right">موقع المشروع</h2>
            <div className="w-full h-80">
              <iframe
                src={achievement.location.src}
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Page;
