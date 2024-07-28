"use client";
import React, { useState } from "react";
import { Timeline } from "antd";
import { motion } from "framer-motion";
import NavMenu from "../../landcomp/navmenu";
import Footer from "../../landcomp/footer";
import { SparklesCore } from "@/components/ui/sparkles";
export default function LandingPage() {
  const [mode] = useState<"left">("left");

  return (
    <main>
      <div className="flex justify-center items-center p-4 m-[3rem]">
        <NavMenu />
      </div>
      <h1 className="text-7xl font-bold text-center text-black relative z-20">
        Academics!
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
      <div className="flex justify-left mx-4">
        <Timeline
          mode={mode}
          items={[
            {
              label: "2010",
              children: "Don Bosco Academy, Patna",
            },
            {
              label: "2017",
              children:
                "Got State Rank 7th among 50K+ Students in METER Examination",
            },
            {
              label: "2018",
              children: "Won 3rd Prize in School Science Exhibition",
            },
            {
              label: "2019",
              children: "Qualified PRMO",
            },
            {
              label: "2019",
              children: "Qualified RMO 2019",
            },
            {
              label: "2019",
              children: "Awarded FIITJEE Medal for Academic Excellence",
            },
            {
              label: "2020",
              children: "NTSE Stage I Qualified",
            },
            {
              label: "2020",
              children: "ICSE 10th Board",
            },
            {
              label: "2022",
              children: "Qualified IOQA",
            },
            {
              label: "2020",
              children: "CBSE 12th Board",
            },

            {
              label: "2022",
              children: "B.Tech NITP ECE (2022-2026)",
            },
            {
              label: "2023",
              children: "Team Co-oridnator, GDSC AI/ML",
            },
            {
              label: "2024",
              children:
                "CONFERENCE Paper(Rejected) EEG Functional Connectivity Feature-Based Diagnosis of ADHD Using Deep Learning on Raspberry Pi submitted to International Conference on Signal Processing and Communications (SPCOM 2024)",
            },
            {
              label: "2024",
              children: "Open Source:  JGEC Winter of Code(JWoC) Mentor",
            },
            {
              label: "2024",
              children:
                "IIT Jodhpur : SIP@SAIDE 2024 Summer Research Intern - Supervisors: Dr. Bikash Santra and Dr. Dipanjan Roy (Brain Science and Application: Brain-inspired multimodal image analysis)",
            },
            {
              label: "2024",
              children:
                "IIT Guwahati CSE '24:  Intern - Supervisor: Dr. Arijit Sur",
            },
          ]}
        />
      </div>
      <motion.div
        className="flex items-center justify-center gap-4 text-lg font-semibold text-gray-800 my-5"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Footer />
      </motion.div>
    </main>
  );
}
