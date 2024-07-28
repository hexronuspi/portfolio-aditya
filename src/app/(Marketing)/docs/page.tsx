"use client"
import React from 'react'

import {motion} from 'framer-motion'
import NavMenu from '../../landcomp/navmenu'
import { CalendarDays } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {Button} from '@/components/ui/button'

import Link from 'next/link';

export default function Docs(){

return (
<main>
<div className="flex justify-center items-center p-4 m-[3rem]"><NavMenu/></div>
<div className='flex justify-center px-5'>
<h1 className="text-5xl font-extrabold text-purple-500 mb-6">Docs</h1>
</div>
<div className='flex justify-center px-5'>
<motion.div 
        className=" text-center p-8 max-w-lg bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
<p className="text-xl text-gray-700 mb-6">The portfolio's custom way of presenting itself</p>
    <p className="text-md text-gray-500 mb-10">
    Docs will give you a tour about this website and also on topics related to Mathematics, Machine Learning, and Compilers
    </p>
    <motion.div whileTap={{ scale: 0.95 }}>
    <Link href="docs/">
    <Button className="bg-gray-950 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Get Started
                      </Button>
    </Link>
</motion.div>
  </motion.div>
  </div>


<motion.div
  className="flex items-center justify-center gap-4 text-lg font-semibold text-gray-800 my-5"
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
>
<HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@Aditya Raj</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarFallback>
            <Button>
  AR
</Button>
              </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@Aditya Raj</h4>
            <p className="text-sm">
              This page is created and maintained by Aditya Raj.
             
            </p>
            
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                July 2024
              </span>
            </div>
            
          </div>
          
        </div>
      </HoverCardContent>
    </HoverCard>

</motion.div>
</main>

  )
}