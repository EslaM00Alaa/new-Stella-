"use client";
import React, { useRef, useState, useEffect } from "react";

const Intro = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // Intersection Observer (keep muted for autoplay safety)
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.muted = true; // autoplay safety
          } else {
            video.muted = true;
          }
        });
      },
      { threshold: 0.5 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="intro"
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ direction: "rtl" }}
    >
      {/* Loader / Placeholder */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
          <img
            src="/bg.jpg"
            className="absolute inset-0 w-full h-full object-cover "
          />
            <div className="absolute inset-0 bg-black/50"></div>
           <div className="absolute inset-0 flex items-center justify-center lg:justify-start px-6 sm:px-10 lg:px-24 text-white">
        <div className="space-y-4 lg:space-y-6 max-w-xl text-center lg:text-right">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide">
            مرحباً بكم في
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            <span className="text-[#d5a055] block">
              New Stella Di Mare Sea View
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-95">
            استمتع بأفضل تجربة على البحر مباشرة مع إطلالة ساحرة وراحة لا مثيل لها.
          </p>
          <a
            href="#contact"
            className="py-3 px-16 sm:px-24 text-lg sm:text-xl lg:text-2xl font-bold rounded-2xl text-white bg-gradient-to-l from-[#d5a055] to-transparent transition duration-300 hover:brightness-110 hover:scale-105 hover:shadow-lg inline-block"
          >
            احجز الآن
          </a>
        </div>
      </div>
        </div>
      )}

      {/* Background Video */}
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dkwx24lyh/video/upload/q_auto,f_auto,w_1280/WhatsApp_Video_2025-12-04_at_5.01.39_PM_1_jcnpkv.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={() => setLoading(false)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-start px-6 sm:px-10 lg:px-24 text-white">
        <div className="space-y-4 lg:space-y-6 max-w-xl text-center lg:text-right">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide">
            مرحباً بكم في
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            <span className="text-[#d5a055] block">
              New Stella Di Mare Sea View
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-95">
            استمتع بأفضل تجربة على البحر مباشرة مع إطلالة ساحرة وراحة لا مثيل لها.
          </p>
          <a
            href="#contact"
            className="py-3 px-16 sm:px-24 text-lg sm:text-xl lg:text-2xl font-bold rounded-2xl text-white bg-gradient-to-l from-[#d5a055] to-transparent transition duration-300 hover:brightness-110 hover:scale-105 hover:shadow-lg inline-block"
          >
            احجز الآن
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
