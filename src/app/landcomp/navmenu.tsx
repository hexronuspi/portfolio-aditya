"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Reorder } from "framer-motion";
import Link from "next/link";
export default function Navmenu() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 p-4" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {

  const [items, setItems] = useState({
    Aditya: ['Home', 'Academics', 'Explore', 'Archive'],
    Docs: ['Machine Learning', 'Mathematics', 'Compilers'],
  })
 
  const [active, setActive] = useState<string | null>(null);
  const handleReorder = (category: string) => (newOrder: string[]) => {
    setItems(prevItems => ({
      ...prevItems,
      [category]: newOrder,
    }));
  };
  
  return (
    <main>
      <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Aditya">
            <Reorder.Group axis="y" values={items.Aditya} onReorder={handleReorder('Aditya')}>
              {items.Aditya.map(item => (
                <Reorder.Item key={item} value={item} className="p-2 border-b">
                  <HoveredLink href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                    {item}
                  </HoveredLink>
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </MenuItem>

        
  <Link href="/docs">
    <div className="text-black hover:text-gray-600">Docs</div>
  </Link>

          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Image AI"
                href="/image-ai"
                description="Transform images by harnessing the power of AI."
              />
              <ProductItem
                title="LLMs"
                href="/llms"
                description="Implementation of LLMs for fast, scalable language modeling."
              />
              <ProductItem
                title="Website Development"
                href="/website-development"
                description="Responsive Websites."
              />
              <ProductItem
                title="PyToolkit"
                href="/pytool-kit"
                description="Efficient Python library for powerful functionalities."
              />
            </div>
          </MenuItem>



          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/contact" className="flex justify-center">Form</HoveredLink>
              <HoveredLink href="https://github.com/hexronuspi" target="blank" className="flex justify-center text-gray-600 hover:text-gray-900"><FaGithub className="w-6 h-6" /></HoveredLink>
              <HoveredLink href="https://www.linkedin.com/in/hexronus/" target="blank" className="flex justify-center text-gray-600 hover:text-gray-900"><FaLinkedin className="w-6 h-6" /></HoveredLink>
              <HoveredLink href="mailto:hexronus@gmail.com" target="blank" className="flex justify-center text-gray-600 hover:text-gray-900"><FaEnvelope className="w-6 h-6" /></HoveredLink>
            </div>
          </MenuItem>


        </Menu>
      </div>
    </main>
  );
}
