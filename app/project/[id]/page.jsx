"use client";

import React, { useEffect, useState } from "react";
import Header from "../../_components/nav/nav";
import Footer from "../../_components/footer/footer";
import { useParams } from "next/navigation";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { URL } from "@/app/_apis/baseUrl";
import { getProjectsById } from "@/app/_apis/projects";

const Page = () => {
  const params = useParams();
  const id = params.id;

  const [project, setProject] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getProjectsById(id);
      if (data && typeof data === "object") {
        setProject(data);
      } else {
        console.error("Unexpected project data:", data);
        setProject(null);
      }
    };
    getData();
  }, [id]);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl">
        جاري تحميل البيانات...
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 pt-12">
      <Header flag={true} />

      <div className="w-11/12 lg:w-10/12 mx-auto my-16">
        {/* بيانات المشروع */}
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-1/2">
            {project.cover && (
              <Image
                src={`${URL}${project.cover}`}
                alt={project.name || "مشروع"}
                width={800}
                height={500}
                className="rounded-xl shadow-md w-full h-auto"
              />
            )}
          </div>

          <div className="w-full lg:w-1/2 space-y-4 text-right">
            <h1 className="text-3xl font-bold">{project.name}</h1>
            {project.location?.name && (
              <p className="text-lg">📍 {project.location.name}</p>
            )}
            {project.area && <p className="text-md">المساحة: {project.area} م²</p>}
            {project.nunits && <p className="text-md">عدد الوحدات: {project.nunits}</p>}
            {project.startDate && (
              <p className="text-md">الاستلام في: {project.startDate}</p>
            )}

            <div className="flex items-center gap-1 mt-3">
              <span>{project.rate || 0}</span>
              <FaStar className="text-[#e0a14b] ml-1" />
            </div>

            {project.soldout && (
              <p className="text-lg font-bold text-red-500">
                تم حجز جميع الوحدات
              </p>
            )}
          </div>
        </div>

        {/* الوصف */}
        {project.description && (
          <div className="mt-10 bg-gray-100 p-6 rounded-lg leading-loose whitespace-pre-line text-right">
            {project.description}
          </div>
        )}

        {/* صور إضافية */}
        {project.images?.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">صور من المشروع</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.map((img, idx) => (
                <Image
                  key={idx}
                  src={`${URL}${img}`}
                  alt={`صورة إضافية ${idx + 1}`}
                  width={500}
                  height={400}
                  className="rounded-lg w-full h-64 object-cover"
                />
              ))}
            </div>
          </div>
        )}

        {/* الرسم الهندسي */}
        {project.Architecturaldrawings?.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">    التصميم المعماري النهائي</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.Architecturaldrawings.map((img, idx) => (
                <Image
                  key={idx}
                  src={`${URL}${img}`}
                  alt={`الرسم الهندسي ${idx + 1}`}
                  width={500}
                  height={400}
                  className="rounded-lg w-full h-64 object-cover"
                />
              ))}
            </div>
          </div>
        )}

        {/* التصميم النهائي */}
        {project.Architecturaldesigns?.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4" >  
              الرسم الهندسي
               </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.Architecturaldesigns.map((img, idx) => (
                <Image
                  key={idx}
                  src={`${URL}${img}`}
                  alt={`التصميم النهائي ${idx + 1}`}
                  width={800}
                  height={500}
                  className="rounded-lg w-full h-64 object-contain"
                />
              ))}
            </div>
          </div>
        )}

        {/* الخريطة */}
        {project.location?.src && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-2">موقع المشروع</h2>
            <div className="w-full h-80">
              <iframe
                src={project.location.src}
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        )}

        {/* رابط الحجز */}
        {!project.soldout && (
          <div className="flex justify-center mt-12">
            <a
              href="https://wa.me/201145456969"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e0a14b] hover:bg-[#e0a24bf3] text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
            >
              مستني ايه؟ يلا احجز وحدتك الآن 💬
            </a>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Page;
