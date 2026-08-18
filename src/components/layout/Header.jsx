"use client";
import Image from "next/image";
import logo from "../../../public/logo/earlyTuneLogo.webp";
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
            <Link href={"#home"}>
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
              <span className="text-[#E11962]">E</span>
              <span className="text-[#F06916]">A</span>
              <span className="text-[#4D931F]">R</span>
              <span className="text-[#0366CA]">L</span>
              <span className="text-[#3B0764]">Y</span>{" "}
              <span className="text-[#032B5B]">T</span>
              <span className="text-[#E11962]">U</span>
              <span className="text-[#F06916]">N</span>
              <span className="text-[#4D931F]">E</span>
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
            className="rounded-full bg-[#173A8F] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#102E73] cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </header>

      {/* Premium Navbar Divider */}
      <div className="relative h-[4px] w-full overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-[#DDECEF]" />

       
        <div className="absolute left-1/2 top-0 h-[3px] w-[25%] -translate-x-1/2 rounded-full bg-white/40 blur-[2px]" />
      </div>

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
