"use client";

import { motion } from "framer-motion";
import Star from "../decorations/Star";
import {
  HeartHandshake,
  HandHeart,
  Sprout,
  Trophy,
  CalendarCheck,
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
      className="relative min-h-[680px] sm:min-h-[720px] overflow-hidden bg-white"
    >
      {/* Background glow */}

      {/* Stars */}
      <Star
        className="absolute left-[18%] top-[32%] w-4"
        color="#FFFFFF"
        opacity={0.5}
      />

      <Star
        className="absolute right-[20%] top-[38%] w-5"
        color="#FFFFFF"
        opacity={0.45}
      />

      {/* Hero content */}
      <div className=" relative z-10 flex min-h-[600px] flex-col items-center justify-center px-5 pb-28 text-center sm:min-h-[650px] sm:px-6 sm:pb-32">
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 max-w-5xl px-2 font-[var(--font-fredoka)] text-4xl font-semibold leading-[1.08]tracking-[-1px] sm:text-5xl md:text-6xl md:leading-[1.02] lg:mt-10 lg:text-7xl"
        >
          <span className="text-[#D5165E]">Tune In</span>{" "}
          <span className="text-[#0769C6]">To Everyday Learning For a</span> {' '}
          <br className="hidden sm:block" />
          <span className="text-[#ED6E10]">Brighter</span>{" "}
          <span className="text-[#4C912B]">Beginning</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.25,
            ease: "easeOut",
          }}
          className="mt-7 max-w-xl text-[17px] leading-7 text-[#315667]"
        >
          A nurturing space where every child can learn, grow and thrive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="flex items-center gap-2 rounded-full border border-white/50 bg-white/30 px-4 py-2 backdrop-blur-sm"
              >
                <Icon size={18} strokeWidth={2} style={{ color: item.color }} />

                <span className="text-sm font-semibold text-[#315667]">
                  {item.text}
                </span>
              </div>
            );
          })}
        </motion.div>

        <motion.a
          href="tel:+917989087357"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: "easeOut",
          }}
          whileHover={{
            y: -4,
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0B7895] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(11,120,149,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#096A82]"
        >
          <CalendarCheck size={18} strokeWidth={2} />
          Schedule an Appointment
        </motion.a>
      </div>

      {/* Layered landscape */}
      <div className="absolute -bottom-20 left-0 h-52 w-full rounded-[50%_50%_0_0] bg-[#B8D9C8]" />

      <div className="absolute -bottom-32 left-[-10%] h-56 w-[120%] rounded-[50%_50%_0_0] bg-[#91C5AE]" />

      <div className="absolute -bottom-44 left-[15%] h-48 w-[90%] rounded-[50%_50%_0_0] bg-[#78B79C]" />
    </section>
  );
}
