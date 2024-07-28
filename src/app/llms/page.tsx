"use client";
import React from 'react';
import { motion } from 'framer-motion';
import NavMenu from '../landcomp/navmenu';
import Footer from '../landcomp/footer';
import { SparklesCore } from '@/components/ui/sparkles';
import MTA from '../projects/llm/dialai-mta';
import MTAAudio from '../projects/llm/dialai-mta-audio';
import MTATranslate from '../projects/llm/dialai-translate';
import MTATalk from '../projects/llm/dialai-mta-talk';
import Link from 'next/link'
export default function LandingPage() {
  return (
    <main>
      <div className="flex justify-center items-center p-4 m-[3rem]">
        <NavMenu />
      </div>
      <h1 className="text-7xl font-bold text-center text-black relative z-20">
        Dialai
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

      <div className='flex justify-center p-4'>
      <p>Interpreting Texts with Advanced AI Capabilities.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-20 py-5'>
      <MTA />
      <MTAAudio/>
      <MTATalk/>
      <MTATranslate/>
      </div>
      
   
   

      <div className='flex justify-left text-blue-600 p-10'>
        <p>* Coming soon with full documentation and can be accessed from this page.</p>
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
