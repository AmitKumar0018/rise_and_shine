"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Star from "../decorations/Star";

import {
  HeartHandshake,
  HandHeart,
  Sprout,
  Trophy,
  CalendarCheck,
  MapPin,
} from "lucide-react";

export default function Home() {
  const values = [
    {
      icon: HeartHandshake,
      text: "Care",
      color: "#E66B7A",
    },
    {
      icon: HandHeart,
      text: "Support",
      color: "#7355C7",
    },
    {
      icon: Sprout,
      text: "Grow",
      color: "#16804B",
    },
    {
      icon: Trophy,
      text: "Achieve",
      color: "#C98516",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[680px] overflow-hidden bg-[#F8FAF7] sm:min-h-[720px]"
    >
      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      {/* Soft background glow */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#DCCFFF]/25 blur-3xl" />

      <div className="absolute -right-32 bottom-24 h-80 w-80 rounded-full bg-[#B8D9C8]/25 blur-3xl" />

      {/* Stars */}
      <Star
        className="absolute left-[6%] top-[30%] w-5 md:left-[10%] lg:left-[14%]"
        color="#C98516"
        opacity={0.8}
      />

      <Star
        className="absolute right-[8%] top-[22%] w-5 md:right-[12%] lg:right-[16%]"
        color="#E66B7A"
        opacity={0.8}
      />

      <Star
        className="absolute bottom-[18%] left-[45%] hidden w-4 lg:block"
        color="#7355C7"
        opacity={0.55}
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-5 pb-14 pt-15 sm:px-8 lg:min-h-[720px] lg:px-10 lg:pt-15">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="text-center lg:text-left">
            {/* Small label */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-5 flex items-center justify-center gap-2 lg:justify-start"
            >
              <span className="h-2 w-2 rounded-full bg-[#E66B7A]" />

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0B7895]">
                Nurturing Every Little Journey
              </span>

              <span className="h-2 w-2 rounded-full bg-[#16804B]" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.85,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto max-w-3xl font-[var(--font-fredoka)] text-[3.2rem] font-semibold leading-[1.08] tracking-[-1px] sm:text-[3.8rem]  lg:mx-0 "
            >
              <span className="text-[#D5165E]">Tune In</span>{" "}
              <span className="text-[#173A8F]">To Everyday Learning For a</span>{" "}
              <span className="text-[#ED6E10]">Brighter</span>{" "}
              <span className="text-[#4C912B]">Beginning</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="mx-auto mt-6 max-w-xl text-[17px] leading-7 text-[#315667] lg:mx-0"
            >
              A nurturing space where every child can learn, grow and thrive —
              with compassionate care, personalized support and joyful everyday
              learning.
            </motion.p>

            {/* =================================================
                VALUES
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45,
                ease: "easeOut",
              }}
              className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.text}
                    whileHover={{
                      y: -3,
                      scale: 1.03,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="flex items-center gap-2 rounded-full border border-[#DDECEF] bg-white px-4 py-2.5 shadow-[0_6px_20px_rgba(7,90,120,0.08)]"
                  >
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: `${item.color}18`,
                      }}
                    >
                      <Icon
                        size={16}
                        strokeWidth={2.2}
                        style={{
                          color: item.color,
                        }}
                      />
                    </span>

                    <span className="text-sm font-semibold text-[#315667]">
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.55,
                ease: "easeOut",
              }}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
            >
              {/* Appointment */}
              <motion.a
                href="tel:+917989087357"
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-flex items-center gap-2 rounded-full bg-[#173A8F] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(11,120,149,0.20)] transition-all duration-300 hover:bg-[#102E73]"
              >
                <CalendarCheck size={18} strokeWidth={2} />
                Schedule an Appointment
              </motion.a>

              {/* Location */}
              <motion.a
                href="https://share.google/cz5VySnlEkhUH1eme"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-flex items-center gap-2 rounded-full border border-[#D5E4E7] bg-white/80 px-7 py-3.5 text-[15px] font-semibold text-[#075A78] shadow-[0_8px_25px_rgba(7,90,120,0.08)] backdrop-blur-sm transition-all duration-300 hover:border-[#0B7895] hover:bg-white"
              >
                <MapPin size={18} strokeWidth={2} className="text-[#E66B7A]" />
                Visit Us
              </motion.a>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT HERO IMAGE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            {/* Green Glow */}
            <div className="absolute -right-12 top-8 h-44 w-44 rounded-full bg-[#B8D9C8]/50 blur-3xl" />

            {/* Pink Glow */}
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#F6C7D0]/50 blur-3xl" />

            {/* Purple Glow */}
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DCCFFF]/20 blur-3xl" />

            {/* Decorative Star */}
            <Star
              className="absolute -right-2 top-6 z-20 w-7 sm:-right-5"
              color="#C98516"
              opacity={0.9}
            />

            {/* Decorative Star */}
            <Star
              className="absolute -bottom-2 left-0 z-20 w-6 sm:-left-5"
              color="#E66B7A"
              opacity={0.8}
            />

            {/* =================================================
                FLOATING IMAGE
            ================================================== */}

            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              {/* Outer frame */}
              <div className="absolute -inset-3 rounded-[3rem] border border-[#DDECEF] bg-white/50" />

              {/* Image */}
              <div className="relative aspect-[4/4.6] overflow-hidden rounded-[2.7rem] border-[6px] border-white bg-[#EAF5FF] shadow-[0_30px_80px_rgba(30,80,100,0.16)]">
                <Image
                  src="/hero/heroBanner.webp"
                  alt="Child learning in a nurturing environment"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-cover"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#075A78]/20 via-transparent to-white/5" />
              </div>
            </motion.div>

            {/* =================================================
                CARE BADGE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.9,
              }}
              className="absolute -bottom-5 -left-3 z-20 flex items-center gap-3 rounded-2xl border border-[#DDECEF] bg-white px-4 py-3 shadow-[0_15px_40px_rgba(7,90,120,0.12)] sm:-left-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E66B7A]/10">
                <HeartHandshake
                  size={21}
                  strokeWidth={2}
                  className="text-[#E66B7A]"
                />
              </span>

              <div>
                <p className="text-xs font-medium text-[#7B929A]">
                  Every child deserves
                </p>

                <p className="font-[var(--font-fredoka)] text-base font-semibold text-[#075A78]">
                  Care & Support
                </p>
              </div>
            </motion.div>

            {/* =================================================
                GROWTH BADGE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 1,
              }}
              className="absolute -right-2 bottom-20 z-20 hidden items-center gap-2 rounded-2xl border border-[#DDECEF] bg-white px-4 py-3 shadow-[0_15px_40px_rgba(7,90,120,0.12)] sm:flex sm:-right-8"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#16804B]/10">
                <Sprout size={20} strokeWidth={2} className="text-[#16804B]" />
              </span>

              <span className="font-[var(--font-fredoka)] text-sm font-semibold text-[#075A78]">
                Learn • Grow • Thrive
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
