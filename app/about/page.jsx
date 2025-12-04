"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import React from "react";
import Header from "../_components/nav/nav";
import Footer from "../_components/footer/footer";
import Image from "next/image";
import img from "../../public/images/a9.jpeg";

const Page = () => {
  return (
    <div className="bg-white text-gray-900">
      <Header flag={true}/>

      {/* HERO (Image Left - Text Right) */}
      <section className="w-11/12 max-w-7xl mx-auto py-32 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          className="space-y-6 text-right"
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-[1.4] text-gray-900">
            قرية نيو ستيلا سي فيو – جنوب الدرج
            <span className="block mt-3 text-[#d5a055] text-2xl md:text-3xl font-semibold">
              البحر… الطبيعة… تصميم يعيش للأبد
            </span>
          </h1>

          <p className="text-gray-600 text-lg leading-8">
            تجربة فريدة على ساحل البحر الأحمر حيث تجتمع المياه الصافية،
            التصميم الذكي، والطبيعة الساحرة في مكان واحد يقدم لك الهدوء
            والجمال والرؤية المباشرة للبحر في كل اتجاه.
          </p>
        </motion.div>

          <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          className="w-full h-[350px] md:h-[480px] relative rounded overflow-hidden shadow-lg"
        >
          <Image
            src={img}
            alt="Stella Sea View"
            fill
            className=" scale-110 hover:scale-125 transition-all duration-700"
          />
         
        </motion.div>
      </section>

      {/* PAGE CONTENT */}
      <div className="w-11/12 max-w-6xl mx-auto py-20 space-y-20">
        {/* ABOUT */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          className="leading-8 text-lg"
        >
          <h2 className="text-3xl font-bold text-[#d5a055] mb-6">من نحن</h2>

          <p>
            تمتد قرية <strong>نيو ستيلا سي فيو – جنوب الدرج</strong> على مساحة
            ضخمة تبلغ 471,000 م² في واحدة من أجمل مناطق البحر الأحمر، حيث
            تتناغم المياه الفيروزية مع الطبيعة الصخرية الفريدة.
          </p>

          <p className="mt-4">
            يعتمد تصميم القرية على نظام المصاطب المتدرجة، ما يضمن رؤية بحرية
            كاملة لكل وحدة. بدأ المشروع في 2002 ونُفّذ على أربع مراحل حتى 2010،
            ليضم أكثر من <strong>2123 وحدة</strong> بمساحات متنوعة تطل جميعها
            على البحر.
          </p>
        </motion.div>

        {/* SERVICES */}
        <motion.div variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show">
          <h2 className="text-3xl font-bold text-[#d5a055] mb-6">خدماتنا</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>تنفيذ المشروع بنظام المصاطب لرؤية بانورامية للبحر.</li>
            <li>تصميم هندسي ومعماري متكامل.</li>
            <li>تخطيط يواكب أفضل معايير الرياح والتهوية.</li>
            <li>صيانة مستمرة للمرافق العامة.</li>
          </ul>
        </motion.div>

        {/* PROJECT STATS */}
        <motion.div variants={fadeIn("up", 0.4)} initial="hidden" whileInView="show">
          <h2 className="text-3xl font-bold text-[#d5a055] mb-6">ملخص المشروع</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-lg">
            <p>📍 <strong>الموقع:</strong> طريق السويس – السخنة – الزعفرانة</p>
            <p>🌊 <strong>طول الشاطئ:</strong> 930 متر</p>
            <p>🏝 <strong>عمق المشروع:</strong> 506 متر داخل اليابسة</p>
            <p>🏗 <strong>الإنشاء:</strong> 2002 – 2010</p>
            <p>🏢 <strong>عدد الوحدات:</strong> 2123 وحدة</p>
            <p>🏞 <strong>المصاطب:</strong> 19 مصطبة</p>
          </div>
        </motion.div>

        {/* END MESSAGE */}
        <motion.div variants={fadeIn("up", 0.7)} initial="hidden" whileInView="show">
          <h2 className="text-3xl font-bold text-[#d5a055] mb-6">كلمة ختامية</h2>

          <p className="text-gray-700 text-lg leading-8">
            تجمع القرية بين التصميم الذكي وجمال الطبيعة، لتمنحك تجربة ساحرة
            على شاطئ البحر الأحمر… حيث اللحظات الجميلة لا تُنسى.
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
