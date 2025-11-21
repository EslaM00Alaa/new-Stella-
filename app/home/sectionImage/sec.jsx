import React from "react";

import im1 from "../../../public/images/im1.jpg";
import im2 from "../../../public/images/im2.jpg";
import im3 from "../../../public/images/im3.jpg";
import im4 from "../../../public/images/im4.jpg";
import im5 from "../../../public/images/im5.jpg";
import im6 from "../../../public/images/im6.jpg";
import im7 from "../../../public/images/im7.jpg";
import im8 from "../../../public/images/im8.jpg";
import im9 from "../../../public/images/im9.jpg";



import start from "../../../public/logo_star_10.png";

const SectionsImages = () => {
  return (
    <div className="bg-white py-16">
      <section id="services" className="w-11/12 lg:w-10/12 mx-auto">
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {[im1, im7, im4, im8, im6,im2].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden  shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img.src}
                alt={`image-${i}`}
                className="w-full h-36 md:h-48 rounded  hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default SectionsImages;
