"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/reveal";
import { Button } from "@/components/ui/button"
import Link from "next/link";
export default function TextRevealCardValue() {
  
  return (
    <div className="flex items-center justify-center h-full p-8 rounded-2xl w-full md:w-1/2">
      <TextRevealCard className="bg-black">
        <TextRevealCardTitle>
          Hi, I am Aditya.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Welcome to my personal website, look around and have fun.
          </TextRevealCardDescription>
        <TextRevealCardDescription>
        I am interested in Compilers and ML.
        </TextRevealCardDescription>        
       <div className="pt-4"><Link href='/archive'><Button variant="secondary">Resume</Button></Link></div>
      </TextRevealCard>
    </div>
  );
}
