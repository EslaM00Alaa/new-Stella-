// "use client";

// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";
// import React from "react";
// import Header from "../_components/nav/nav";
// import Footer from "../_components/footer/footer";
// import Image from "next/image";
// import modrenHouse from "../../public/images/mdn.jpg";

// const Page = () => {
//   return (
//     <div className="bg-white text-gray-800">
//       <Header />

//       {/* Hero Section */}
//       <div className="relative w-full h-[60vh]">
//         <Image
//           src={modrenHouse}
//           alt="modren house"
//           layout="fill"
//           objectFit="cover"
//           className="brightness-75"
//         />
//         <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
//           <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
//             شركة المهندس للتطوير العقاري
//           </h1>
//         </div>
//       </div>

//       {/* About Company */}
//       <div className="w-11/12 max-w-6xl mx-auto py-16 space-y-10">
//         <motion.div
//           variants={fadeIn("up", 0.2)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="text-lg leading-8"
//         >
//           <h2 className="text-2xl md:text-3xl font-semibold text-[#e0a14b] mb-4">
//             من نحن
//           </h2>
//           <p>
//             شركة <strong>المهندس للتطوير العقاري</strong> هي شركة مصرية متخصصة
//             في تقديم خدمات التطوير العقاري المتكاملة، مقرها الرئيسي في محافظة
//             المنيا. تأسست عام 2010، ومنذ ذلك الحين تسعى لتمكين عملائها من
//             الحصول على منزل أحلامهم، مكتبهم أو متجرهم، سواء للأغراض الشخصية أو
//             الاستثمارية، في مختلف أنحاء مصر.
//           </p>
//           <p className="mt-4">
//             نحن نقدم خدمات متكاملة تشمل الإشراف المعماري، التشطيبات طبقاً للكود
//             المصري، إعداد المخططات الهندسية، تصميم اللاندسكيب، حمامات السباحة،
//             المصاعد المنزلية، أنظمة التكييف المركزي، وأعمال الديكور الداخلي
//             والخارجي.
//           </p>
//         </motion.div>

//         {/* Services Section */}
//         <motion.div
//           variants={fadeIn("up", 0.3)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           <h2 className="text-2xl md:text-3xl font-semibold text-[#e0a14b] mb-4">
//             خدماتنا
//           </h2>
//           <ul className="list-disc pl-5 space-y-2 text-base">
//             <li>التطوير العقاري للشقق، الفلل، المحال التجارية</li>
//             <li>الإشراف المعماري والتنفيذ وفق الكود المصري</li>
//             <li>أعمال التشطيبات والديكورات الداخلية والخارجية</li>
//             <li>تصميم وتنفيذ حمامات السباحة، المصاعد، التكييف المركزي</li>
//             <li>مشاريع سكنية وتجارية داخل المنيا الجديدة والقديمة والعاصمة الإدارية</li>
//           </ul>
//         </motion.div>

//         {/* Achievements Section */}
//         <motion.div
//           variants={fadeIn("up", 0.4)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           <h2 className="text-2xl md:text-3xl font-semibold text-[#e0a14b] mb-4">
//             سابقة الأعمال
//           </h2>
//           <p>
//             تمتلك شركة المهندس سجلًا مشرفًا من الإنجازات، حيث نفذت وسلّمت أكثر
//             من <strong>30 مشروعًا</strong> بنجاح منذ انطلاقها في السوق المصري،
//             مع التزام صارم بمواعيد التسليم وجودة التنفيذ، مما جعل شعارها
//             الموثوق:
//           </p>
//           <p className="italic font-semibold text-[#e0a14b] mt-2">
//             "كلمتنا التزام."
//           </p>
//         </motion.div>

//         {/* Vision */}
//         <motion.div
//           variants={fadeIn("up", 0.5)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           <h2 className="text-2xl md:text-3xl font-semibold text-[#e0a14b] mb-4">
//             رؤيتنا
//           </h2>
//           <p>
//             نسعى إلى توفير حلول استثمارية وسكنية عالية الجودة للمستثمرين،
//             الشركات، والأنشطة التجارية الطامحة للتوسع في محافظة المنيا، العاصمة
//             الإدارية، التجمع الخامس، وغيرها.
//           </p>
//         </motion.div>

//         {/* Locations */}
//         <motion.div
//           variants={fadeIn("up", 0.6)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           <h2 className="text-2xl md:text-3xl font-semibold text-[#e0a14b] mb-4">
//             مواقع المشاريع
//           </h2>
//           <ul className="list-disc pl-5 space-y-2 text-base">
//             <li>المنيا </li>
//             <li>المنيا الجديدة</li>
//             <li>التجمع الخامس</li>
//             <li>شمال الرحاب</li>
//             <li>العاصمة الإدارية الجديدة</li>
//           </ul>
//         </motion.div>

//         {/* Branches */}
//         <motion.div
//           variants={fadeIn("up", 0.7)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           <h2 className="text-2xl md:text-3xl font-semibold text-[#e0a14b] mb-4">
//             فروعنا واستثماراتنا
//           </h2>
//           <p>
//             نمتلك فرعين خارجيين في <strong>سلطنة عُمان</strong> و{" "}
//             <strong>المملكة الأردنية</strong>، مما يدعم استثماراتنا الخارجية
//             ويعكس ثقة العملاء الإقليمية.
//           </p>
//         </motion.div>

//         {/* Chairman */}
//         <motion.div
//           variants={fadeIn("up", 0.8)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           <h2 className="text-2xl md:text-3xl font-semibold text-[#e0a14b] mb-4">
//             رئيس مجلس الإدارة
//           </h2>
//           <p>
//             يقود الشركة السيد <strong>محمد حسن</strong> بخبرة ورؤية استراتيجية
//             واضحة للنمو والتوسع وتحقيق رضا العملاء عبر مشاريع نوعية ناجحة.
//           </p>
//         </motion.div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Page;
