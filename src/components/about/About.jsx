"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "../../../public/images/about.webp";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FFFDF7] px-6 py-24 md:px-10 lg:py-32"
    >
      {/* Decorative blob */}
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#DCCFFF]/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0B7895]">
            About Early Tune
          </p>

          <h2 className="font-[var(--font-fredoka)] text-4xl font-semibold leading-tight text-[#075A78] md:text-5xl lg:text-6xl">
            Helping Little Minds
            <br />
            <span className="text-[#16804B]">Grow & Achieve</span>
          </h2>

          <p className="mt-5 text-[16px] leading-7 text-[#315667]">
            Every child has their own rhythm, strengths and beautiful way of
            seeing the world.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Decorative blob */}
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[3rem] bg-[#B8D9C8]" />

            <div className="relative overflow-hidden rounded-[3rem] bg-[#DCCFFF]">
              <Image
                src={aboutImg}
                alt="Child learning and growing"
                className="h-[420px] w-full object-cover md:h-[520px]"
              />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="absolute -bottom-6 -right-3 rounded-3xl bg-white px-6 py-5 shadow-[0_15px_50px_rgba(30,80,100,0.12)] md:-right-8"
            >
              <p className="font-[var(--font-fredoka)] text-2xl font-semibold text-[#075A78]">
                Every child
              </p>

              <p className="text-sm text-[#315667]">
                deserves to be independent ✨
              </p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#0B7895]">
              Our Story
            </p>

            <h3 className="font-[var(--font-fredoka)] text-3xl font-semibold leading-tight text-[#075A78] md:text-4xl">
              A little support can make
              <span className="text-[#16804B]"> a big difference.</span>
            </h3>

            <p className="mt-6 leading-7 text-[#315667]">
              Early Tune is a child development and rehabilitation centre
              dedicated to helping children discover their abilities, build
              confidence and enjoy every step of their development.
            </p>

            <p className="mt-4 leading-7 text-[#315667]">
              We believe progress happens best when children feel safe,
              understood and encouraged. That's why we create personalized,
              child-centered experiences for every little learner.
            </p>

            {/* Features */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              className="mt-8 space-y-4"
            >
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 20,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="flex items-center gap-3"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E7F6EC] text-[#16804B]">
                  ✓
                </span>
                <span className="text-[15px] font-medium text-[#315667]">
                  Personalized care for every child
                </span>
              </motion.div>

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 20,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="flex items-center gap-3"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E7F6EC] text-[#16804B]">
                  ✓
                </span>
                <span className="text-[15px] font-medium text-[#315667]">
                  Child-centered development
                </span>
              </motion.div>

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 20,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="flex items-center gap-3"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E7F6EC] text-[#16804B]">
                  ✓
                </span>
                <span className="text-[15px] font-medium text-[#315667]">
                  Support for children and families
                </span>
              </motion.div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="mt-9"
            >
              <p className="mb-4 text-sm font-semibold text-[#075A78]">
                Follow Our Journey
              </p>

              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/early_tune_?igsh=MXV0Z3g1MHEwczdybw%3D%3D&igsi=MXV0Z3g1MHEwczdybw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Early Tune on Instagram"
                  className="group flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF0F5] text-[#D9467A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D9467A] hover:text-white hover:shadow-lg"
                >
                  <FaInstagram size={20} />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1DYPdZXZ3n/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Early Tune on Facebook"
                  className="group flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF2FF] text-[#1877F2] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white hover:shadow-lg"
                >
                  <FaFacebookF size={20} />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@earlytunecdc?si=qmn1saJh9CES9fBc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Early Tune on YouTube"
                  className="group flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF0F0] text-[#FF0000] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF0000] hover:text-white hover:shadow-lg"
                >
                  <FaYoutube size={20} />
                </a>
                {/* Email */}
                <a
                  href="mailto:earlytunecdc26@gmail.com"
                  aria-label="Email Early Tune"
                  className="group flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF4E8] text-[#C85A00] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C85A00] hover:text-white hover:shadow-lg"
                >
                  <FaEnvelope size={19} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
