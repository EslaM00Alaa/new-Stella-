"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

import iconlogo from "../../../public/cropped-logo_star-80x80.png";
import textlogo from "../../../public/txtlogo.png";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "اعرف عنا" },
  { href: "/services", label: "الخدمات" },
  { href: "/units", label: "الوحدات المتاحة" },
  { href: "/contact", label: "تواصل معنا" },
];


const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = scrolled || menuOpen
    ? "bg-white text-black shadow-md"
    : "bg-transparent text-white";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClass}`}
    >
      <div className="w-11/12 lg:w-10/12 mx-auto flex items-center justify-between py-4">

        {/* Desktop */}
        {!isMobile && (
          <div className="hidden lg:flex w-full items-center justify-between">

          

            {/* Right Links */}
            <nav className="flex gap-10 text-xl ml-auto">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`${
                    scrolled ? "text-[#c28d42]" : "text-[#9d8244]"
                  } hover:opacity-75 transition`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>


              {/* Left Logo (Icon + Text) */}
            <div className="flex items-center ">
              <Image src={textlogo} alt="Text Logo   " width={240} />
              <Image src={iconlogo} alt="Icon Logo" width={30} />
            </div>
          </div>
        )}

        {/* Mobile */}
        {isMobile && (
          <div className="w-full flex justify-between items-center">

            {/* Left Logo (Icon + Text) */}
           

            {/* Menu Button */}
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer text-[#9d8244]"
            >
              {menuOpen ? <IoMdClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <div className="flex items-center ">
              <Image src={textlogo} alt="Text Logo" width={180} />
              <Image src={iconlogo} alt="Icon Logo" width={30} />
            </div>

          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-black flex flex-col items-center gap-6 py-8 shadow-lg z-40">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium hover:text-[#9d8244] transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
