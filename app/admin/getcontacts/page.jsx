"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineUser, AiOutlinePhone, AiOutlineDelete, AiOutlineMessage } from "react-icons/ai";

const ShowContact = () => {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "admin") {
      router.replace("/admin/login");
    } else {
      setAllowed(true);
      fetchContacts();
    }
  }, []);

  const fetchContacts = async () => {
    const res = await fetch("/api/contacts");
    const data = await res.json();
    if (data.success) setContacts(data.contacts);
  };

  const handleDelete = async (id) => {
    if (!confirm("هل انت متأكد من حذف الرسالة؟")) return;

    const res = await fetch(`/api/contacts?id=${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.success) {
      setContacts((prev) => prev.filter((item) => item._id !== id));
    } else {
      alert("حدث خطأ أثناء الحذف");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    router.replace("/admin/login");
  };

  if (!allowed) return null;

  return (
    <div className="min-h-screen bg-[#f3f4f6] p-6">

      {/* Logout Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleLogout}
          className="bg-[#d5a055] text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition"
        >
          تسجيل الخروج
        </button>
      </div>

      <h1 className="text-3xl font-bold text-[#0d375c] mb-6 text-right">
        الرسائل الواردة
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.length === 0 && (
          <p className="text-center text-gray-600 col-span-full">لا توجد رسائل حالياً</p>
        )}

        {contacts.map((c) => (
          <div
            key={c._id}
            className="bg-white p-5 rounded-xl shadow-lg flex flex-col justify-between border border-gray-200 hover:shadow-2xl transition"
          >
            {/* Name */}
            <div className="flex items-center mb-2">
              <AiOutlineUser className="text-[#0d375c] mr-2 text-xl" />
              <span className="font-semibold text-[#0d375c]">{c.name}</span>
            </div>

            {/* Phone */}
            <div className="flex items-center mb-2">
              <AiOutlinePhone className="text-[#0d375c] mr-2 text-xl" />
              <span>{c.phone}</span>
            </div>

            {/* Message */}
            <div className="flex items-start mb-4">
              <AiOutlineMessage className="text-[#0d375c] mr-2 text-xl mt-1" />
              <p className="text-gray-700">{c.message}</p>
            </div>

            {/* Delete Button */}
            <button
              onClick={() => handleDelete(c._id)}
              className="flex items-center justify-center bg-[#d5a055] text-white py-2 rounded-lg hover:bg-red-700 transition"
            >
              <AiOutlineDelete className="mr-2" /> حذف الرسالة
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowContact;
