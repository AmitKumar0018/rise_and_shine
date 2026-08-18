"use client";
import Image from "next/image";
import logo from "../../../public/logo/logo.webp";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const closeMenu = () => {
    setVisible(false);
  };
  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between bg-[#F8FAFC] backdrop-blur-md px-4 py-2">
        {/* block for logo + brand name  */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="relative h-12 w-12">
            <Link href={'#home'}>
              <Image
                src={logo}
                alt="logo-image"
                fill
                className="object-cover rounded-full"
              />
            </Link>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-[var(--font-fredoka)] text-[22px] font-bold tracking-tight">
              <span className="text-[#C94F5F]">E</span>
              <span className="text-[#086B87]">a</span>
              <span className="text-[#5B3FA8]">r</span>
              <span className="text-[#087A4B]">l</span>
              <span className="text-[#B87508]">y</span>{" "}
              <span className="text-[#086B87]">T</span>
              <span className="text-[#C94F5F]">u</span>
              <span className="text-[#087A4B]">n</span>
              <span className="text-[#5B3FA8]">e</span>
            </span>

            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#086B87]">
              Child Development Centre
            </span>
          </div>
        </div>

        {/* mobile hamburger  */}

        <button
          onClick={() => setVisible(true)}
          className="rounded-lg p-2 lg:hidden"
        >
          <Menu size={28} className="text-[#063B4C]" />
        </button>

        {/* block for all nav links  */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-7 cursor-pointer">
            <Link
              href="#home"
              className="text-[15px] font-medium text-[#24566A] transition-colors hover:text-[#063B4C]"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-[15px] font-medium text-[#24566A] transition-colors hover:text-[#063B4C]"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-[15px] font-medium text-[#24566A] transition-colors hover:text-[#063B4C]"
            >
              Services
            </Link>
            <Link
              href="#facilities"
              className="text-[15px] font-medium text-[#24566A] transition-colors hover:text-[#063B4C]"
            >
              Facilities
            </Link>
            <Link
              href="#gallery"
              className="text-[15px] font-medium text-[#24566A] transition-colors hover:text-[#063B4C]"
            >
              Gallery
            </Link>
          </ul>
        </div>

        {/* block for Button  */}
        <div className="hidden lg:flex items-center">
          <Link
            href="#contact"
            className="rounded-full bg-[#0B7895] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#096A82] cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-[100] bg-white transition-transform duration-300 lg:hidden ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          {/* Back */}
          <div
            onClick={closeMenu}
            className="flex cursor-pointer items-center gap-4 border-b p-3"
          >
            <X size={20} />
            <p>Back</p>
          </div>
          <Link
            href="#home"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
          >
            HOME
          </Link>
          <Link
            href="#about"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
          >
            ABOUT US
          </Link>
          <Link
            href="#services"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
          >
            SERVICES
          </Link>
          <Link
            href="#facilities"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
          >
            FACILITIES
          </Link>
          <Link
            href="#gallery"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
          >
            GALLERY
          </Link>
          <Link
            href="#contact"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </>
  );
}
