"use client";

import { motion } from "framer-motion";
import { BalloonIcon } from "lucide-react";
import Balloon from "../shared/Ballons";
import Cloud from "../decorations/Cloud";
import Star from "../decorations/Star";
import {
  HeartHandshake,
  HandHeart,
  Sprout,
  Trophy,
  CalendarCheck,
} from "lucide-react";

export default function Home() {
  const colorfulText = (text) => {
    const colors = [
      "#E66B7A",
      "#7355C7",
      "#16804B",
      "#C98516",
      "#0B7895",
      "#E66B7A",
    ];

    return text.split("").map((letter, index) => (
      <span
        key={index}
        style={{
          color: colors[index % colors.length],
        }}
      >
        {letter}
      </span>
    ));
  };

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
      className="relative min-h-[720px] overflow-hidden bg-[linear-gradient(180deg,#78C6E8_0%,#AFC9F3_25%,#DCCFFF_48%,#F4D6CE_72%,#FFE3C7_100%)]"
    >
      {/* Background glow */}
      {/* Clouds */}
      <Cloud
        className="cloud-float absolute left-[8%] top-[18%] w-24"
        color="#FFFFFF"
        opacity={0.45}
      />

      <Cloud
        className="cloud-float absolute right-[10%] top-[25%] w-32"
        color="#FFFFFF"
        opacity={0.35}
      />

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

      {/* Balloons */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="balloon balloon-1">
          <Balloon color="#FF8585" size={52} />
        </div>

        <div className="balloon balloon-2">
          <Balloon color="#FFD45F" size={42} />
        </div>

        <div className="balloon balloon-3">
          <Balloon color="#63C7E8" size={58} />
        </div>

        <div className="balloon balloon-4">
          <Balloon color="#7ED6A5" size={48} />
        </div>

        <div className="balloon balloon-5">
          <Balloon color="#B99AF5" size={52} />
        </div>

        <div className="balloon balloon-6">
          <Balloon color="#FF9FC8" size={38} />
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[650px] flex-col items-center justify-center px-6 pb-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl font-[var(--font-fredoka)] text-5xl font-semibold leading-[1.02] tracking-[-1.5px] md:text-6xl lg:text-7xl mt-10"
        >
          {colorfulText("Tune In To Everyday Learning")}
          <br />
          {colorfulText("For a Brighter Beginning")}
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
