"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/tooltip";
import { motion } from 'framer-motion';
const people = [
  {
    id: 1,
    name: "Aditya Raj",
    designation: "B.Tech in ECE",
    image: "/aditya.jpg"
  }
];

export default function IconDev() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <motion.div
        whileHover={{ scale: 1.01, rotate: 15 }}
        whileTap={{
          scale: 0.8,
          rotate: -15,
          borderRadius: "100%"
        }}
      >
        <AnimatedTooltip items={people} />
      </motion.div>
    </div>
  );
}