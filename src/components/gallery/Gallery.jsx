"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const galleryImages = [
  {
    src: "/gallery/gall-one.webp",
    title: "A place to explore",
    category: "Our Centre",
  },
  {
    src: "/gallery/gall-2.webp",
    title: "Learning through play",
    category: "Activities",
  },
  {
    src: "/gallery/gall-3.webp",
    title: "Growing together",
    category: "Therapy",
  },
  {
    src: "/gallery/gall-5.webp",
    title: "Little moments",
    category: "Activities",
  },
  {
    src: "/gallery/gall-4.webp",
    title: "Every step matters",
    category: "Therapy",
  },
  {
    src: "/gallery/gall-6.webp",
    title: "Happy minds",
    category: "Our Centre",
  },
  {
    src: "/gallery/gallery-seven.webp",
    title: "Happy minds",
    category: "Our Centre",
  },
  {
    src: "/gallery/gall-8.webp",
    title: "Happy minds",
    category: "Our Centre",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#FFFDF7] px-6 py-8 md:px-10 lg:py-15"
    >
      {/* Background decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#DCCFFF]/30 blur-3xl" />

      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-[#B8D9C8]/30 blur-3xl" />

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
          className="mb-14 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0B7895]">
            Our Gallery
          </p>

          <h2 className="font-[var(--font-fredoka)] text-4xl font-semibold leading-tight text-[#075A78] md:text-5xl lg:text-6xl">
            Little moments,
            <br />
            <span className="text-[#16804B]">big memories.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-7 text-[#315667]">
            Take a glimpse into the warm, welcoming spaces and joyful moments
            that make Early Tune special.
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                  scale: 0.97,
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
              className={`group relative overflow-hidden rounded-[2rem] ${
                index === 0
                  ? "lg:col-span-2 lg:row-span-2"
                  : index === 3
                    ? "lg:col-span-2"
                    : ""
              }`}
            >
              <div
                className={`relative w-full ${
                  index === 0
                    ? "h-[520px]"
                    : index === 3
                      ? "h-[250px]"
                      : "h-[250px]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#063B4C]/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 translate-y-5 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    {image.category}
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-4">
                    <h3 className="font-[var(--font-fredoka)] text-xl font-semibold text-white">
                      {image.title}
                    </h3>
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
