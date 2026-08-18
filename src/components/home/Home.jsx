"use client";

import { motion } from "framer-motion";
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
      className="relative min-h-[680px] sm:min-h-[720px] overflow-hidden bg-[#F8FAF7]"
    >
      {/* Background glow */}

      {/* Stars */}
      <Star
        className="absolute left-[8%] top-[40%] w-5 md:left-[15%] lg:left-[20%]"
        color="#C98516"
        opacity={0.8}
      />

      <Star
        className="absolute right-[8%] top-[40%] w-5 md:right-[15%] lg:right-[20%]"
        color="#E66B7A"
        opacity={0.8}
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
          <span className="text-[#0769C6]">To Everyday Learning For a</span>{" "}
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
              <motion.div
                key={item.text}
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 rounded-full border border-[#DDECEF] bg-white px-5 py-2.5 shadow-[0_6px_20px_rgba(7,90,120,0.08)]"
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
                    style={{ color: item.color }}
                  />
                </span>

                <span className="text-sm font-semibold text-[#315667]">
                  {item.text}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
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
            className="inline-flex items-center gap-2 rounded-full bg-[#0B7895] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(11,120,149,0.20)] transition-all duration-300 hover:bg-[#096A82]"
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

     {/* Back layer */}
<div className="absolute -bottom-16 left-0 h-48 w-full rounded-[50%_50%_0_0] bg-[#BFDBFE]" />

{/* Layer 2 */}
<div className="absolute -bottom-24 left-[-8%] h-52 w-[116%] rounded-[50%_50%_0_0] bg-[#93C5FD]" />

{/* Layer 3 */}
<div className="absolute -bottom-32 left-[5%] h-52 w-[100%] rounded-[50%_50%_0_0] bg-[#60A5FA]" />

{/* Layer 4 */}
<div className="absolute -bottom-40 left-[15%] h-48 w-[90%] rounded-[50%_50%_0_0] bg-[#3B82F6]" />

{/* Front layer */}
<div className="absolute -bottom-48 left-[28%] h-44 w-[75%] rounded-[50%_50%_0_0] bg-[#2563EB]" />
    </section>
  );
}
