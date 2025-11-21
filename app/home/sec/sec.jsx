"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// Import all 43 images
import c1 from "../../../public/clientsimages/c1.jpg";
import c2 from "../../../public/clientsimages/c2.jpg";
import c3 from "../../../public/clientsimages/c3.jpg";
import c4 from "../../../public/clientsimages/c4.jpg";
import c5 from "../../../public/clientsimages/c5.jpg";
import c6 from "../../../public/clientsimages/c6.jpg";
import c7 from "../../../public/clientsimages/c7.jpg";
import c8 from "../../../public/clientsimages/c8.jpg";
import c9 from "../../../public/clientsimages/c9.jpg";
import c10 from "../../../public/clientsimages/c10.jpg";
import c11 from "../../../public/clientsimages/c11.jpg";
import c12 from "../../../public/clientsimages/c12.jpg";
import c13 from "../../../public/clientsimages/c13.jpg";
import c14 from "../../../public/clientsimages/c14.jpg";
import c15 from "../../../public/clientsimages/c15.jpg";
import c16 from "../../../public/clientsimages/c16.jpg";
import c17 from "../../../public/clientsimages/c17.jpg";
import c18 from "../../../public/clientsimages/c18.jpg";
import c19 from "../../../public/clientsimages/c19.jpg";
import c20 from "../../../public/clientsimages/c20.jpg";
import c21 from "../../../public/clientsimages/c21.jpg";
import c22 from "../../../public/clientsimages/c22.jpg";
import c23 from "../../../public/clientsimages/c23.jpg";
import c24 from "../../../public/clientsimages/c24.jpg";
import c25 from "../../../public/clientsimages/c25.jpg";
import c26 from "../../../public/clientsimages/c26.jpg";
import c27 from "../../../public/clientsimages/c27.jpg";
import c28 from "../../../public/clientsimages/c28.jpg";
import c29 from "../../../public/clientsimages/c29.jpg";
import c30 from "../../../public/clientsimages/c30.jpg";
import c31 from "../../../public/clientsimages/c31.jpg";
import c32 from "../../../public/clientsimages/c32.jpg";
import c33 from "../../../public/clientsimages/c33.jpg";
import c34 from "../../../public/clientsimages/c34.jpg";
import c35 from "../../../public/clientsimages/c35.jpg";
import c36 from "../../../public/clientsimages/c36.jpg";
import c37 from "../../../public/clientsimages/c37.jpg";
import c38 from "../../../public/clientsimages/c38.jpg";
import c39 from "../../../public/clientsimages/c39.jpg";
import c40 from "../../../public/clientsimages/c40.jpg";
import c41 from "../../../public/clientsimages/c41.jpg";
import c42 from "../../../public/clientsimages/c42.jpg";
import c43 from "../../../public/clientsimages/c43.jpg";

// Put them in an array
const images = [
  c1, c2, c3, c4, c5, c6, c7, c8, c9, c10,
  c11, c12, c13, c14, c15, c16, c17, c18, c19, c20,
  c21, c22, c23, c24, c25, c26, c27, c28, c29, c30,
  c31, c32, c33, c34, c35, c36, c37, c38, c39, c40,
  c41, c42, c43
];

const SectionImages = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto py-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 2 },   // mobile
          640: { slidesPerView: 3 },   // tablet
          1024: { slidesPerView: 6 },  // desktop
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center">
              <Image
                src={img}
                alt={`client-${index + 1}`}
                className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SectionImages;
