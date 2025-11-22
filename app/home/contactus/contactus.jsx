// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../variants";
// import { IoCall } from "react-icons/io5";
// import { FaLocationDot } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import contact from "../../_apis/contact";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const contactDetails = [
//   {
//     icon: <FaLocationDot />,
//     label: "العنوان",
//     value: "برج المهندس الدور ال٤ شارع بن خصيب امام الريس للدهب",
//   },
//   {
//     icon: <MdEmail />,
//     label: "البريد الإلكتروني",
//     value: "elmohandsdevelopment@gmail.com",
//   },
//    {
//     icon: <IoCall />,
//     label: "ادارة المبيعات",
//     value: "01145456969",
//   },
// ];

// const Contactus = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async () => {
//     if (!name || !phone || !message) {
//       toast.error("يرجى تعبئة جميع الحقول");
//       return;
//     }

//     try {
//       await contact(name, phone, message);
//       toast.success("تم إرسال الرسالة بنجاح");
//       setName("");
//       setPhone("");
//       setMessage("");
//     } catch (err) {
//       toast.error("حدث خطأ أثناء الإرسال");
//     }
//   };

//   return (
//     <div id="contact">
//       <ToastContainer autoClose={3000} />

//       {/* العنوان والشرح */}
//       <div className="text-center my-4 w-11/12 lg:w-8/12 mx-auto">
//         <motion.h2
//           variants={fadeIn("up", 0.3)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="text-4xl text-center lg:text-5xl font-bold text-[#35394d] mb-3"
//         >
//           تواصل معنا
//         </motion.h2>

//         <motion.p
//           variants={fadeIn("up", 0.5)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="text-lg font-medium w-9/12 mx-auto text-gray-800 leading-loose"
//         >
//           يسعدنا تواصلكم معنا لتقديم أفضل الخدمات بكل يسر وسهولة، فريقنا جاهز لخدمتكم في أي وقت.
//         </motion.p>

//         {/* معلومات التواصل */}
//         <div
//           className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:w-9/12 mx-auto"
//           dir="rtl"
//         >
//           {contactDetails.map((item, idx) => (
//             <div key={idx} className="flex items-center justify-start gap-4">
//               <span className="p-4 rounded-full bg-[#e0a14b] text-white text-2xl">
//                 {item.icon}
//               </span>
//               <div className="flex flex-col text-right">
//                 <h3 className="font-bold">{item.label}</h3>
//                 <p className="text-gray-500">{item.value}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* النموذج والخريطة */}
//       <div className="w-full bg-white mt-6 p-6 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-8">
//         {/* نموذج التواصل */}
//         <div className="w-full lg:w-6/12 p-6 bg-white flex flex-col items-center gap-4">
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full border-2 p-3 px-6 text-xl border-[#ccc] rounded-md focus:outline-none"
//             placeholder="الاسم"
//           />

//           <input
//             type="text"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="w-full border-2 p-3 px-6 text-xl border-[#ccc] rounded-md focus:outline-none"
//             placeholder="رقم الهاتف"
//           />

//           <textarea
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="w-full border-2 px-6 py-3 text-xl border-[#ccc] rounded-md h-32 focus:outline-none"
//             placeholder="اكتب استفسارك"
//           />

//           <button
//             className="w-full py-3 bg-[#e0a14b] text-xl text-white rounded-md hover:bg-[#d28f3e] transition"
//             onClick={handleSubmit}
//           >
//             إرسال الطلب
//           </button>
//         </div>

//         {/* خريطة جوجل */}
//         <div className="w-full lg:w-6/12 h-[400px]">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1759.7720269671304!2d30.757845687032326!3d28.099447448982122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145b2501008a5de3%3A0x3d3c582c499fb74e!2z2KfZhNmF2YbZitin2Iwg2YLYs9mFINin2YTZhdmG2YrYp9iMINij2YjZhCDYp9mE2YXZhtmK2KfYjCDZhdit2KfZgdi42Kkg2KfZhNmF2YbZitinIDI0NTExMjM!5e0!3m2!1sar!2seg!4v1753825822058!5m2!1sar!2seg"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             className="rounded-md shadow-md"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contactus;
