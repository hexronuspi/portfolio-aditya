"use client"
import React, { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import { SparklesCore } from '@/components/ui/sparkles'
import NavMenu from '../../landcomp/navmenu'
import Footer from '../../landcomp/footer'

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

import Link from 'next/link';

const drive_ug_student = 'https://drive.google.com/file/d/1ML-9i3NitLvBd3sMGEGMq8Pc6SVJxNX5/view?usp=sharing'



const YearHighlight = styled('span')(({ theme }) => ({
  fontWeight: 'bold',
  margin: '15px',
  color: theme.palette.mode === 'dark' ? '#fffb3b' : '#f44336',
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1), 
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', 
  '&:hover': {
    transform: 'scale(1.01)', 
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)', 
  },
  cursor: 'pointer', 
  margin: '0.5rem', 
  borderRadius: theme.shape.borderRadius, 
  overflowWrap: 'break-word',
  wordBreak: 'break-word',
}));

const sentences = {
  1: "2019: Qualified Regional Mathematical Olympiad, scored 44/102 and attended the INMO Camp",
  2: "2023: Team Co-oridnator - GDSC AI/ML, Conducted and managed an open book pure mathematics test for first-year students to select trainees for the team.",
  3: "2024: CONFERENCE Paper(Rejected) \"EEG Functional Connectivity Feature-Based Diagnosis of ADHD Using Deep Learning on Raspberry Pi\" submitted to SPCOM 2024 (Paper ID: 204)",
  4: "2024: Open Source: (Mentor ID: 6590212849948C6A) JGEC Winter of Code(JWoC) Mentor - Guided students as a Mentor in JWOC, for the project ’eagleview’ a self-developed Python library for visualizing image datasets.",
  5: "2024: IIT Jodhpur SIP@SAIDE 2024 Summer Research Intern - Supervisors: Dr. Bikash Santra and Dr. Dipanjan Roy (Brain Science and Application: Brain-inspired multimodal image analysis)",
  6: "2024: IIT Guwahati CSE '24 Intern - Supervisor: Dr. Arijit Sur"
};

const formatSentence = (sentence: string) => {
  const [year, ...rest] = sentence.split(': ');
  return (
    <>
      <YearHighlight>{year}:</YearHighlight>
      {rest.join(': ')}
    </>
  );
};


export default function LandingPage(){
 
  return (

<main>

<div className="flex justify-center items-center p-4 m-[3rem]"><NavMenu/></div>
<h1 className="text-7xl font-bold text-center text-black relative z-20">
  Explore!
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
    <div className='flex justify-center p-10'>
      <Box sx={{ width: '100%', maxWidth: 800, minHeight: 600 }}>
  <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
    {Object.entries(sentences).map(([key, value]) => (
      <Item key={key}>
        {formatSentence(value)}
      </Item>
    ))}
  </Masonry>
</Box>
      </div>
<div className='flex justify-left pl-[20%]'>
  <p className='text-sky-600'>*</p>
  <Link href={drive_ug_student} className='text-sky-600' target='blank'>Test Paper</Link>
</div>

<motion.div
  className="flex items-center justify-center gap-4 text-lg font-semibold text-gray-800 my-5"
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
>
    <Footer/>
</motion.div>
</main>

  )
}