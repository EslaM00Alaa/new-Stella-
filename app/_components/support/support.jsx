"use client";
import React, { useState } from "react";
import { TbMessageDots } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import toast, { Toaster } from "react-hot-toast";

const Support = () => {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !message)
      return toast.error("من فضلك املأ جميع الحقول");

    try {
      setLoading(true);

      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(data.message || "حدث خطأ أثناء الإرسال");
        return;
      }

      toast.success("تم إرسال رسالتك بنجاح 🎉");

      // Clear fields
      setName("");
      setPhone("");
      setMessage("");

      // Close popup after success
      setTimeout(() => setOpen(false), 800);

    } catch (err) {
      toast.error("حدث خطأ أثناء الاتصال بالسيرفر");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Toaster />

      {/* Button */}
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

      {/* Popup Form */}
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

          <form onSubmit={handleSubmit} className="flex flex-col space-y-3" dir="rtl">
            <input
              type="text"
              placeholder="الاسم"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#777]"
            />

            <input
              type="text"
              placeholder="رقم الهاتف"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#777]"
            />

            <textarea
              placeholder="اكتب رسالتك هنا..."
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#777]"
            ></textarea>

            <button
              type="submit"
              className="
                bg-[#0d375c] text-white py-2 rounded-lg 
                font-semibold text-lg 
                hover:brightness-110 hover:scale-[1.02]
                transition-all duration-300
              "
              disabled={loading}
            >
              {loading ? "جارٍ الإرسال..." : "إرسال"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Support;
