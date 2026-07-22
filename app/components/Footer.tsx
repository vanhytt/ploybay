"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <footer id="contact" className="w-full bg-[#111111] text-white border-t border-zinc-800">
      {/* Top Section - Let's get in touch & Form */}
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          
          {/* Left info - col-span-5 */}
          <div className="flex flex-col space-y-6 lg:col-span-5">
            <h2 className="font-serif text-3xl font-light tracking-tight md:text-5xl leading-tight text-white">
              Let's get in touch.
            </h2>
            <p className="max-w-[40ch] font-sans text-sm leading-relaxed text-zinc-400">
              Đăng ký để nhận thông tin về các bộ sưu tập giới hạn và các chương trình ưu đãi của Ploybay.
            </p>
          </div>

          {/* Right form - col-span-7 */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                {/* Form Field must have label. Placeholder must not function as label. */}
                <label htmlFor="newsletter-email" className="font-sans text-xs font-semibold tracking-widest uppercase text-white">
                  Địa chỉ Email của bạn
                </label>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@ploybay.vn"
                    className="w-full border-b border-zinc-700 bg-transparent py-3 font-sans text-sm tracking-wide text-white placeholder:text-zinc-500 outline-none transition-colors duration-300 focus:border-white focus:ring-0"
                  />
                  <button
                    type="submit"
                    className="whitespace-nowrap border border-white bg-white px-8 py-3 font-sans text-xs font-semibold tracking-widest text-black uppercase transition-all duration-300 hover:bg-white/90 hover:text-black hover:border-white active:scale-[0.98]"
                  >
                    Đăng Ký
                  </button>
                </div>
              </div>
              {submitted && (
                <p className="font-sans text-xs text-white animate-pulse">
                  Cảm ơn bạn đã kết nối. Ploybay sẽ gửi những lời chúc đặc biệt sớm nhất.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px w-full bg-zinc-800" />

        {/* Bottom Section - Copyright & Links */}
        <div className="flex flex-col-reverse justify-between gap-8 sm:flex-row sm:items-center">
          {/* Logo & Copyright */}
          <div className="space-y-2">
            <span className="font-serif text-xl font-medium tracking-widest text-white">PLOYBAY</span>
            <p className="font-sans text-[11px] tracking-wide text-zinc-500">
              © {new Date().getFullYear()} PLOYBAY Florist. Bảo lưu mọi quyền.
            </p>
          </div>

          {/* Contact Details & Links */}
          <div className="grid grid-cols-2 gap-8 text-[12px] font-medium tracking-wider text-zinc-400 sm:flex sm:gap-16">
            <div className="space-y-2">
              <span className="block font-semibold uppercase text-white">Liên hệ</span>
              <p className="font-sans">090 123 4567</p>
              <p className="font-sans">contact@ploybay.vn</p>
            </div>
            <div className="space-y-2">
              <span className="block font-semibold uppercase text-white">Địa chỉ</span>
              <p className="font-sans max-w-[20ch]">123 Nguyễn Trãi, Quận 1, TP. Hồ Chí Minh</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}