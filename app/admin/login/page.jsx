"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "2003") {
      setError("");

      // Save info in localStorage
      localStorage.setItem("role", "admin");
      localStorage.setItem("username", username);

      // Redirect
      router.push("/admin/getcontacts");
    } else {
      setError("❌ اسم المستخدم أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eee] px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-[#0d375c] mb-6">
          تسجيل الدخول
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="text-[#0d375c] font-medium">اسم المستخدم</label>
            <input
              type="text"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0d375c]"
              placeholder="أدخل اسم المستخدم"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="text-[#0d375c] font-medium">كلمة المرور</label>
            <input
              type="password"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0d375c]"
              placeholder="أدخل كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-red-600 text-center font-medium">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#0d375c] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#094066] transition"
          >
            دخول
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
