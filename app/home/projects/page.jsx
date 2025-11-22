// "use client";
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../variants";
// import Image from "next/image";
// import { FaStar } from "react-icons/fa";

// // صور المشاريع
// import Link from "next/link";
// import { getTop3Projects } from "@/app/_apis/projects";
// import { URL } from "@/app/_apis/baseUrl";

// const Projects = () => {

//   //   {
//   //     cover: im1,
//   //     name: "برج المهندس 1",
//   //     location: { name: "أبوفليو - حي الفيلات" },
//   //     area: "350م²",
//   //     nunits: "39 وحدة",
//   //     startdate: "يناير 2015",
//   //     enddate: "أبريل 2016",
//   //     rate: 5,
//   //   },
//   //   {
//   //     cover: im2,
//   //     name: "برج المهندس 4",
//   //     location: { name: "شلبى الجديدة" },
//   //     area: "400م²",
//   //     nunits: "18 وحدة",
//   //     startdate: "فبراير 2017",
//   //     enddate: "أكتوبر 2018",
//   //     rate: 5,
//   //   },
//   //   {
//   //     cover: im3,
//   //     name: "برج المهندس 5",
//   //     location: { name: "المنيا الجديدة - مجاورة 2" },
//   //     area: "500م²",
//   //     nunits: "24 وحدة",
//   //     startdate: "مارس 2019",
//   //     enddate: "مايو 2020",
//   //     rate: 5,
//   //   },
//   // ];

//   const [Projectsar, setProjectsar] = useState([]);  

//   useEffect(() => {
    
//     const getData = async () => {
//           const data = await getTop3Projects();
//           console.log(data);
          
//           if (data && Array.isArray(data)) {
//             setProjectsar(data);
//           } else {
//             console.error("Unexpected achievements data:", data);
//             setProjectsar([]);
//           }
//         };
//         getData();
  
//   }, []);

//   return (
//     <section id="projects" className="w-11/12 lg:w-10/12 mx-auto my-20">
//       <motion.h2
//         variants={fadeIn("up", 0.1)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="text-3xl lg:text-4xl font-semibold text-gray-700 text-center mb-12"
//       >
//          مشروعات قيد الانشاء
//       </motion.h2>

//       <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//         {Projectsar.map((a, i) => (
//            <Link href={`/project/${a._id}`} 
//           key={i}>
//           <motion.div
//             key={i}
//             variants={fadeIn("up", i * 0.2)}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-4 duration-300 transition-all text-right rtl"
//           >
//             <div className="w-full h-56 relative">
//               <Image
//                 src={`${URL}${a.cover}`}
//                 alt={a.name}
//                 className=""
//                 fill
//                 sizes="(max-width: 768px) 100vw, 33vw"
//               />
//             </div>
//          <div className="p-5 space-y-2">
//             <div className="flex justify-between items-center">
//                 <h3 className="text-xl font-bold text-[#e0a14b]">{a.name}</h3>
//                 <div className="flex items-center gap-1 mt-3">
//                 {a.rate}
//                 <FaStar className="text-[#e0a14b] ml-1" />
//                 </div>
//             </div>

//             <p className="text-gray-600 text-sm">📍 {a.location.name}</p>

//             <div className="text-sm text-gray-700 mt-2 space-y-1">
//                 <p>📐 المساحة: {a.area}</p>
//                 <p>🏢 عدد الوحدات: {a.nunits}</p>
//                 <p>📅  الاستلام في: {a.startDate}</p>
//             </div>


//             </div>

//           </motion.div>
//           </Link>
//         ))}
//       </div>

//       <div className="w-full flex justify-center mt-12">
//         <Link href="/projects" className="py-3 px-10 text-xl bg-gray-700 hover:bg-gray-800 text-white font-bold rounded-full transition-all duration-300 shadow-lg">
//           المزيد  
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Projects;
