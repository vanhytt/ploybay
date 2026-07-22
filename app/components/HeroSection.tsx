"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const HERO_SLIDES = [
  {
    src: "/image/nền 8.jpg",
    slogan: "Got you looking",
  },
  {
    src: "/image/nền 9.jpg",
    slogan: "Crafted with love",
  },
  {
    src: "/image/nền 10.jpg",
    slogan: "All the best",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    // 💡 SỬA: Đổi nền xám bg-[#cfd1cd] thành bg-black để không bị chói lóa khi mờ
    <section className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-black">
      
      {/* Background Images Overlay Stack */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.src}
            // 💡 SỬA: Chỉnh duration từ 6000ms xuống 1500ms để hiệu ứng mờ tan trong 1.5s mượt mà
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={`Ploybay brand atmosphere image ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/25 z-20 pointer-events-none" />

      {/* Hero Typography */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 md:px-8 max-w-5xl w-full pointer-events-none select-none">
        {/* Khung chứa slogan động */}
        <div className="relative w-full h-[80px] md:h-[130px] lg:h-[160px] flex items-center justify-center font-serif text-[50px] md:text-[80px] lg:text-[100px] font-light tracking-tight text-white">
          {HERO_SLIDES.map((slide, index) => (
            <span
              key={slide.slogan}
              className={`absolute left-0 right-0 mx-auto transition-all duration-1500 ease-in-out text-center block ${
                index === currentIndex 
                  ? "opacity-100 translate-y-0 visible z-20" 
                  : "opacity-0 translate-y-2 invisible z-0"
              }`}
            >
              {slide.slogan}
            </span>
          ))}
        </div>

        {/* Logo Ploybay */}
        <div className="flex justify-center items-center mt-6 md:mt-8 pb-2">
          <Image 
            src="/logo.png" 
            alt="Ploybay Logo" 
            width={300} 
            height={120} 
            className="h-16 md:h-50 w-auto object-contain" 
            priority 
          />
        </div>
      </div>

      {/* Scroll Down Arrow Icon */}
      <div className="absolute bottom-12 left-1/2 z-30 -translate-x-1/2">
        <a
          href="#story"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/45 bg-transparent text-white transition-all duration-300 hover:scale-105 hover:bg-white/10 active:scale-95"
          aria-label="Scroll to content"
        >
          <ArrowDown className="h-4.5 w-4.5 stroke-[1.5]" />
        </a>
      </div>
    </section>
  );
}