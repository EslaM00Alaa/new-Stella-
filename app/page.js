"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

import logo from "../public/logo2.png";

const Home = () => {
  const router = useRouter();

  // Redirect after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="bg-[#fff] w-full h-screen flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image src={logo} alt="logo" width={300} />
      </motion.div>
    </div>
  );
};

export default Home;
