"use client";
import React, { useState } from "react";
import { TbMessageDots } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

const Support = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* زرار الرسالة */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white shadow-xl 
          flex items-center justify-center text-2xl lg:text-3xl
          hover:scale-110 hover:shadow-2xl transition-all duration-300 text-gray-800
        "
      >
        {open ? <RxCross2 /> : <TbMessageDots />}
      </button>

      {/* صندوق الفورم */}
      {open && (
        <div
          className="
            mt-4 w-80 bg-white p-5 rounded-2xl shadow-2xl 
            animate-[fadeInUp_0.3s_ease] border border-gray-200
          "
        >
          <h3 className="text-xl font-bold text-[#0d375c] mb-3 text-center">
            تواصل معنا
          </h3>

          <form className="flex flex-col space-y-3" dir="rtl">
            <input
              type="text"
              placeholder="الاسم"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#9d8244]"
            />

            <input
              type="text"
              placeholder="رقم الهاتف"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#9d8244]"
            />

            <textarea
              placeholder="اكتب رسالتك هنا..."
              rows={4}
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#9d8244]"
            ></textarea>

            <button
              className="
                bg-[#0d375c] text-white py-2 rounded-lg 
                font-semibold text-lg 
                hover:brightness-110 hover:scale-[1.02]
                transition-all duration-300
              "
            >
              إرسال
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Support;
