"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../_components/nav/nav"; 
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import { FaStar } from "react-icons/fa";
import Footer from "../_components/footer/footer"; 


import Image from "next/image";

import Link from "next/link";
import { URL } from "../_apis/baseUrl";
import { getSortedProjects } from "../_apis/projects";



const Page = () => {


  const [Projectsar, setProjectsar] = useState([]);  

  useEffect(() => {
    
    const getData = async () => {
          const data = await getSortedProjects();
          console.log(data);
          
          if (data && Array.isArray(data)) {
            setProjectsar(data);
          } else {
            console.error("Unexpected achievements data:", data);
            setProjectsar([]);
          }
        };
        getData();
  
  }, []);



  return (
    <div className="bg-white ">
      <Head>
        <title>المهندس للتطوير العقاري | مشاريع سكنية وتجارية في المنيا</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="سابقة اعمال شركة المهندس"
        />
        <meta
          name="keywords"
          content="المهندس للتطوير العقاري, شركة عقارات في المنيا, مشاريع سكنية المنيا, مشاريع تجارية المنيا, عقارات المنيا الجديدة, شقق للبيع في المنيا, محلات تجارية المنيا, مطور عقاري مصر, تشطيبات هندسية, أعمال لاندسكيب, ديكورات داخلية وخارجية, حمامات سباحة, تكييف مركزي, العاصمة الإدارية, التجمع الخامس, كلمتنا التزام"
        />
        <meta name="author" content="المهندس للتطوير العقاري" />

        {/* OG Tags */}
        <meta property="og:title" content="المهندس للتطوير العقاري | مشاريع سكنية وتجارية في المنيا" />
        <meta
          property="og:description"
          content="شركة عقارية متكاملة منذ عام 2010 تقدم خدمات عقارية وإنشائية وتشطيب متكاملة في المنيا ومصر."
        />
        <meta property="og:image" content="https://example.com/logo.jpg" />
        <meta property="og:url" content="https://almohandes-realestate.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="المهندس للتطوير العقاري" />
        <meta name="twitter:description" content="مشاريع سكنية وتجارية بإشراف هندسي وتسليم دقيق في المنيا الجديدة والقديمة." />
        <meta name="twitter:image" content="https://example.com/logo.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://almohandes-realestate.com" />

 
      </Head>

      <div className="overflow-x-hidden">
        <Header flag={true} />
       
      
<div className="w-11/12 lg:w-10/12 mx-auto my-32">
   <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {Projectsar.map((a, i) => (
              <Link href={`/project/${a._id}`}>
                <motion.div
                  key={i}
                  variants={fadeIn("up", i * 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-4 duration-300 transition-all text-right rtl"
                >
                  <div className="w-full h-56 relative">
                    <Image
                      src={`${URL}${a.cover}`}
                      alt={a.name}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                        <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-[#e0a14b]">{a.name}</h3>
                        <div className="flex items-center gap-1 mt-3">
                        {a.rate }
                        <FaStar className="text-[#e0a14b] ml-1" />
                    </div>
                    </div>
                    <p className="text-gray-600 text-sm">📍 {a.location.name}</p>
                    <div className="text-sm text-gray-700 mt-2 space-y-1">
                      <p>📐 المساحة: {a.area}</p>
                      <p>🏢 عدد الوحدات: {a.nunits}</p>
                      <p>📅 الاستلام في: {a.startDate} </p>
                    </div>
      
                   
                
               
               
                  </div>
                </motion.div>
                </Link>
              ))}
      </div>
</div>

  



        <Footer />
      </div>
    </div>
  );
};

export default Page;
