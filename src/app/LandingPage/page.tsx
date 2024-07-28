"use client";
import React from "react";
import { motion } from "framer-motion";

import NavMenu from "../landcomp/navmenu";
import IconDev from "../landcomp/iconadi";
import TextRevealCardValue from "../landcomp/describe";
import WobbleCardDemo from "../landcomp/wobble";
import Footer from "../landcomp/footer";
import { SparklesCore } from "@/components/ui/sparkles";

export default function LandingPage() {
  return (
    <main>
      <div className="">
        <motion.div
          drag
          dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
          className="flex justify-center items-center p-4 m-[3rem]"
        >
          <NavMenu />
        </motion.div>
      </div>
  
      <div className="w-1/6">
        <motion.div
          drag
          dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
          className=""
        >
          <IconDev />
        </motion.div>
      </div>

      <motion.div
        drag
        dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
        className="'pt-10'"
      >
        <TextRevealCardValue />
      </motion.div>

      <h1 className="mt-[5rem] text-7xl font-bold text-center text-black relative z-20">
        Highlights!
      </h1>
      <div className="hidden md:flex h-full w-full bg-white flex-col items-center justify-center rounded-md">
        <div className="w-[40rem] h-40 relative">
          <SparklesCore
            background="transparent"
            minSize={0.1}
            maxSize={2.2}
            particleDensity={2800}
            className="w-full h-full"
            particleColor="#CF50D5"
          />
          <div className="absolute inset-0 w-full h-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      <div className="p-4 m-10">
        <WobbleCardDemo />
      </div>

      <div></div>

      <motion.div
        className="flex items-center justify-center gap-4 text-lg font-semibold text-gray-800 my-5"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          drag
          dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
          className="'pt-10'"
        >
          <Footer />
        </motion.div>
      </motion.div>
    </main>
  );
}
