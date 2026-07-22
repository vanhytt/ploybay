"use client";

import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Left Navigation Items */}
        <nav className="hidden items-center gap-8 font-sans text-xs font-semibold tracking-[0.2em] uppercase md:flex">
          <Link href="/products" className="text-white/80 transition-colors duration-300 hover:text-white">
            Products
          </Link>
          <Link href="#story" className="text-white/80 transition-colors duration-300 hover:text-white">
            Stories
          </Link>
          <Link href="#gallery" className="text-white/80 transition-colors duration-300 hover:text-white">
            About Us
          </Link>
        </nav>

        {/* Brand Logo - Centered on desktop, left-aligned on mobile */}
          <Link href="/" className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
            <Image 
              src="/logo.png" 
              alt="Ploybay Logo" 
              width={200} 
              height={80} 
              className="h-18 w-auto object-contain"
              priority
            />
          </Link>

        {/* Right Navigation & CTA Items */}
        <div className="hidden items-center gap-8 font-sans text-xs font-semibold tracking-[0.2em] uppercase md:flex">
          <Link href="#contact" className="text-white/80 transition-colors duration-300 hover:text-white">
            Contact
          </Link>
          <Link
            href="#contact"
            className="text-white rounded-full border border-white/40 px-6 py-2 transition-all duration-300 hover:bg-white hover:text-[#0d0d0d] hover:border-white"
          >
            Buy
          </Link>
          <div className="flex items-center gap-1 cursor-pointer text-white/80 transition-colors duration-300 hover:text-white">
            <span>En</span>
            <ChevronDown className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 text-white transition-colors duration-300 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0d0d0d]/95 px-6 py-8 backdrop-blur-md md:hidden animate-in fade-in slide-in-from-top-4 duration-300 border-b border-white/10">
          <nav className="flex flex-col gap-6 font-sans text-sm font-semibold tracking-widest uppercase">
            <Link
              href="#collections"
              onClick={() => setIsOpen(false)}
              className="text-white/80 transition-colors duration-300 hover:text-white"
            >
              Products
            </Link>
            <Link
              href="#story"
              onClick={() => setIsOpen(false)}
              className="text-white/80 transition-colors duration-300 hover:text-white"
            >
              Stories
            </Link>
            <Link
              href="#gallery"
              onClick={() => setIsOpen(false)}
              className="text-white/80 transition-colors duration-300 hover:text-white"
            >
              About Us
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-white/80 transition-colors duration-300 hover:text-white"
            >
              Contact
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center border border-white/40 py-3 text-xs font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:bg-white hover:text-[#0d0d0d] hover:border-white"
            >
              Buy
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}