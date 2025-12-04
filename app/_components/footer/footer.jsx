import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  
const socialLinks = [
  { href: "https://wa.me/201222172370", icon: FaWhatsapp }, 
  { href: "https://web.facebook.com/profile.php?id=61584120384021&_rdc=1&_rdr#", icon: FaFacebookF },
  { href: "https://www.instagram.com/newstellaseaview/?igsh=MTA4dmxieGY1Y2twbQ%3D%3D#", icon: FaInstagram },
];


const navLinks = [
  { href: "/home/#intro", label: "الرئيسية" },
  { href: "/home/#about", label: "اعرف عنا" },
  { href: "/home/#services", label: "الخدمات" },
  { href: "/home/#activities", label: " الأنشطة والخدمات" },
  { href: "/home/#contact", label: "تواصل معنا" },
];


  return (
    <footer className="bg-[#071827] text-white pt-12 pb-6 w-full">
      
      {/* Social Icons */}
      <div dir="ltr" className="flex justify-center gap-3 lg:gap-4 mb-6">
        {socialLinks.map(({ href, icon: Icon }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 lg:p-3 text-xl lg:text-2xl bg-[#d5a055] rounded-full 
            flex items-center justify-center 
            hover:scale-110 transition-transform duration-200 ease-out"
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Navigation Links */}
      <div className="w-11/12 max-w-5xl mx-auto flex flex-wrap justify-center gap-3 lg:gap-6 text-center text-sm lg:text-lg mb-6">
        {navLinks.map(({ href, label }, i) => (
          <Link
            key={i}
            href={href}
            className="hover:text-[#d5a055] transition"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center text-xs sm:text-sm opacity-80">
        <p>حقوق النشر © 2025 جميع الحقوق محفوظة — NEW STELLA DI MARE</p>
      </div>

    </footer>
  );
};

export default Footer;
