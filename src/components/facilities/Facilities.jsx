"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const facilities = [
  {
    title: "Learning Space",
    description:
      "A comfortable environment for focused learning and development.",
    image: "/facilities/learningArea.webp",
    className: "lg:col-span-7 lg:row-span-1",
  },
  {
    title: "Play Area",
    description: "A joyful environment where children learn through play.",
    image: "/facilities/playArea.webp",
    className: "lg:col-span-3 lg:row-span-1",
  },
  {
    title: "Therapy & Activity Area",
    description:
      "Purposeful spaces designed for learning, movement and growth.",
    image: "/facilities/activity-area.jpg",
    className: "lg:col-span-7 lg:row-span-1",
  },
  {
    title: "Sensory Room",
    description:
      "A calming space designed for sensory exploration and development.",
    image: "/facilities/sensoryArea.webp",
    className: "lg:col-span-3 lg:row-span-1",
  },
];

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="relative overflow-hidden bg-[#F7F9FF] px-6 py-8 md:px-10 lg:py-15"
    >
      {/* Soft decorative glow */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#DCCFFF]/30 blur-3xl" />

      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#B8D9C8]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0B7895]">
            Our Facilities
          </p>

          <h2 className="font-[var(--font-fredoka)] text-4xl font-semibold leading-[1.05] text-[#075A78] md:text-5xl lg:text-6xl">
            Spaces where
            <br />
            <span className="text-[#16804B]">little minds grow.</span>
          </h2>

          <p className="mt-5 max-w-xl text-[16px] leading-7 text-[#315667]">
            Every corner of Early Tune is thoughtfully designed to make children
            feel comfortable, curious and ready to explore.
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid gap-5 lg:grid-cols-10 lg:grid-rows-2"
        >
          {facilities.map((facility) => (
            <motion.div
              key={facility.title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 45,
                  scale: 0.98,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                },
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
              }}
              className={`group relative h-[300px] overflow-hidden rounded-[2rem] ${facility.className}`}
            >
              {/* Image */}
              <Image
                src={facility.image}
                alt={facility.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#063B4C]/80 via-[#063B4C]/10 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-[var(--font-fredoka)] text-2xl font-semibold text-white md:text-3xl">
                      {facility.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-5 text-white/80">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
