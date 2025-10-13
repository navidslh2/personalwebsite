'use client'
import Logo from "@/ui/Logo";
import { AlignCenterIcon, Phone } from "lucide-react";
import React, { useState } from "react";
import HeaderItems from "./HeaderItems";
import Mobilemenu from "./Mobilemenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-5 left-5 right-5 h-[60px]  px-4 md:px-10 flex items-center justify-between  border border-gray-900 rounded-xl shadow-md">
        <AlignCenterIcon className="md:hidden text-white  hover:text-blue-400 cursor-pointer" onClick={()=>setIsMobileMenuOpen(true)}/>
        <div>
          <Logo />
        </div>
        <div className="hidden md:flex">
          <HeaderItems />
        </div>
        <div className="flex text-white gap-3 items-center text-sm">
          <span>09128391641</span>
          <Phone size={20} />
        </div>
        {isMobileMenuOpen && <Mobilemenu isShow={isMobileMenuOpen} backdropHandler={()=> setIsMobileMenuOpen(false)} />}
    </header>
  );
};

export default Navbar;
