"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Speech Therapy",
    description:
      "Helping children find their voice, communicate confidently and build meaningful connections.",
    image: "/services/speech.webp",
    bg: "#E8F7FF",
  },
  {
    number: "02",
    title: "Early Intervention",
    description:
      "Providing early support to help children develop communication, motor, social and learning skills.",
    image: "/services/erly-intervention.webp",
    bg: "#FFF4E5",
  },
  {
    number: "03",
    title: "Occupational Therapy",
    description:
      "Building independence through sensory, motor, coordination and everyday life skills.",
    image: "/services/occupational.webp",
    bg: "#F2EDFF",
  },
  {
    number: "04",
    title: "Special Education",
    description:
      "Creating personalized learning experiences based on each child's unique abilities and needs.",
    image: "/services/special-education.webp",
    bg: "#EAF8F0",
  },
  {
    number: "05",
    title: "ABA Therapy",
    description:
      "Encouraging positive behavior, communication, learning and everyday life skills.",
    image: "/services/aba.webp",
    bg: "#FFF0F5",
  },
  {
    number: "06",
    title: "Physiotherapy (NDT)",
    description:
      "Supporting strength, movement, balance, coordination and physical development.",
    image: "/services/physiotherapy.webp",
    bg: "#EAF5FF",
  },
  {
    number: "07",
    title: "Behavioral Therapy",
    description:
      "Helping children develop positive behaviors, emotional regulation, social skills and everyday independence.",
    image: "/services/behavioral-therapy.webp",
    bg: "#FDECF4",
  },
  {
    number: "08",
    title: "Assessment & Parent Training",
    description:
      "Understanding each child's needs through assessment and empowering parents with practical strategies for continued progress at home.",
    image: "/services/assessment-parent-training.webp",
    bg: "#EEF5FF",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F8FCFA] px-6 py-8 md:px-10 lg:py-15"
    >
      {/* Background decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#DCCFFF]/30 blur-3xl" />

      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-[#B8D9C8]/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0B7895]">
            What We Do
          </p>

          <h2 className="font-[var(--font-fredoka)] text-4xl font-semibold leading-[1.05] tracking-tight text-[#075A78] md:text-5xl lg:text-6xl">
            Little steps,
            <br />
            <span className="text-[#16804B]">big progress.</span>
          </h2>

          <p className="mt-6 max-w-xl text-[16px] leading-7 text-[#315667]">
            Every child develops differently. Our therapies are designed around
            their individual strengths, needs and journey.
          </p>
        </motion.div>

        {/* Services Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{
                  opacity: 0,
                  x: -35,
                  scale: 0.98,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                className="group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-[#E4EEF0] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(30,80,100,0.12)]"
              >
                {/* Soft background glow */}
                <div
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
                  style={{ backgroundColor: service.iconBg }}
                />

                {/* Top row */}
                <div className="relative flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-widest text-[#9AAFB7]">
                    {service.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="relative mt-8 h-56 w-full overflow-hidden rounded-[2rem]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="relative mt-8">
                  <h3 className="font-[var(--font-fredoka)] text-[25px] font-semibold leading-tight text-[#075A78]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-6 text-[#5B7480]">
                    {service.description}
                  </p>
                </div>

                {/* Bottom color line */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: service.iconColor }}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
