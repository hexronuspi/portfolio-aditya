"use client"
import React, { useState, useEffect } from 'react'
import {motion} from 'framer-motion'

import NavMenu from './landcomp/navmenu'
import Footer from './landcomp/footer'

export default function LandingPage(){
  return (

<main>


<div className="flex justify-center items-center p-4 m-[3rem]"><NavMenu/></div>

<div className="flex items-center justify-center h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-xl text-gray-600">Oops! Page not found.</p>
        <motion.a
          href="/"
          whileHover={{ scale: 1.1 }}
          className="mt-8 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md"
        >
          Go Back Home
        </motion.a>
      </motion.div>
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