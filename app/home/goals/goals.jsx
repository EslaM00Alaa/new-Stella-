// "use client";
// import React from "react";
// import {
//   FaChartLine,
//   FaBuilding,
//   FaUsers,
//   FaClock,
//   FaThLarge,
//   FaTools,
// } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../variants";

// const goals = [
//   {
//     Icon: FaChartLine,
//     title: "التوسع في السوق",
//     description:
//       "نسعى إلى التوسع داخل وخارج محافظة المنيا من خلال مشاريع جديدة تلبي احتياجات السوق العقاري.",
//   },
//   {
//     Icon: FaTools,
//     title: "الجودة في التنفيذ",
//     description:
//       "نلتزم بتنفيذ المشاريع وفقًا لأعلى معايير الجودة والكود المصري في التشطيبات والإنشاءات.",
//   },
//   {
//     Icon: FaClock,
//     title: "الالتزام بالمواعيد",
//     description:
//       "نحرص على تسليم المشاريع في مواعيدها المحددة لبناء الثقة وتعزيز مصداقيتنا.",
//   },
//   {
//     Icon: FaThLarge,
//     title: "التنوع في المشاريع",
//     description:
//       "نقدم حلولًا عقارية متكاملة تشمل الشقق، الفلل، المحال التجارية والمكاتب الإدارية.",
//   },
//   {
//     Icon: FaUsers,
//     title: "رضا العملاء",
//     description:
//       "نعمل على تحقيق أقصى درجات رضا العملاء من خلال الشفافية والتواصل المستمر خلال مراحل التنفيذ.",
//   },
//   {
//     Icon: FaBuilding,
//     title: "التطوير المستدام",
//     description:
//       "نراعي في مشاريعنا مبادئ الاستدامة والتصميم العصري لتلبية متطلبات المستقبل.",
//   },
// ];

// const Goals = () => {
//   return (
//     <section id="goals" className="w-11/12 lg:w-10/12 mx-auto my-6">
//       <motion.h2
//         variants={fadeIn("up", 0.1)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="text-3xl lg:text-4xl font-semibold text-gray-700 text-center mb-12"
//       >
//         أهدافنا
//       </motion.h2>

//       <div className="pattern grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//         {goals.map(({ Icon, title, description }, index) => (
//           <motion.div
//             key={index}
//             variants={fadeIn("up", index * 0.2)}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="group cursor-pointer bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-start text-right"
//           >
//             <div className="relative w-12 h-12 mb-4">
//               <Icon className="text-4xl text-[#e0a14b]" />
//             </div>
//             <h3 className="text-xl font-bold mt-2 text-[#35394d]">{title}</h3>
//             <p className="mt-2 text-gray-600 text-sm leading-relaxed">
//               {description}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Goals;
