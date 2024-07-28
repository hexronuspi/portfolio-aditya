"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { motion } from 'framer-motion';

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
       <motion.div
  drag
  dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
  className="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px]"
>
  <WobbleCard
    containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
    className=""
  >
    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
      Image Audio Generator
    </h2>
    <p className="mt-4 text-left text-base/6 text-neutral-200">
      Transform images into immersive soundscapes with our generator.
    </p>
  </WobbleCard>
</motion.div>


      <motion.div
          drag
          dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
          className="max-w-xs"
        >
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            IIT Jodhpur
            <br />
            Research Intern : SIP@SAIDE 2024
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Brain Science and Application: Brain-inspired multimodal image analysis.
          </p>
       
      </WobbleCard>
      </motion.div>
    </div>
  );
}
