"use client"
import React, { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import NavMenu from '../../landcomp/navmenu'
import Footer from '../../landcomp/footer'
import { SparklesCore } from '@/components/ui/sparkles'
export default function LandingPage(){
    const [password, setPassword] = useState('');
    const [accessGranted, setAccessGranted] = useState(false);
  
    const correctPassword = 'aditya'; 
  
    const handlePasswordChange = (e: { target: { value: React.SetStateAction<string> } }) => {
      setPassword(e.target.value);
    };
    const checkPassword = () => {
      if (password === correctPassword) {
        setAccessGranted(true);
      } else {
        alert('Incorrect password');
      }
    };
    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        checkPassword();
      }
    };
  return (
<main>
<div className="flex justify-center items-center p-4 m-[3rem]"><NavMenu/></div>

<h1 className="text-7xl font-bold text-center text-black relative z-20">
  Archive!
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
{!accessGranted ? (
        <div className="flex flex-col items-center justify-center">
            <div> Password: {correctPassword}</div>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onKeyDown={handleKeyPress}
            className="p-2 border-2 border-gray-300 rounded-md"
            placeholder="Enter password"
          />
          <button
            onClick={checkPassword}
            className="mt-4 bg-blue-500 text-white p-2 rounded-md"
          >
            Submit
          </button>
        </div>
      ) : (
        <div className='mt-10'>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe
              src="/resume.pdf"
              style={{ width: '75%', height: '30rem', border: 'none' }}
              title="Resume"
            ></iframe>
          </div>
        </div>
      )}


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