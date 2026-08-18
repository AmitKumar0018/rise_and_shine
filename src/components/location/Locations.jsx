"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Clock3,
  Phone,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const location = {
  name: "Hydrabad Centre",
  address:
    "Second floor, 12-13-483, A/3, Street No. 1, Laxmi Starch Colony, Nagarjuna Nagar Colony, Tarnaka, Secunderabad, Telangana 500017",
  phone: "+91 79890 87357",
  whatsapp: "+91 79890 87357",

  hours: [
    ["Mon - Fri", "9:30 AM - 6:30 PM"],
    ["Saturday", "9:30 AM - 1:30 PM"],
    ["Sunday", "Closed"],
  ],

  mapImage: "/locations/locationimg.webp",
  mapLink: "https://share.google/cz5VySnlEkhUH1eme",
};

export default function Locations() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F8FCFA] px-6 py-8 md:px-10 lg:py-15"
    >
      {/* Background decoration */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#DCCFFF]/30 blur-3xl" />

      <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#B8D9C8]/30 blur-3xl" />

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
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0B7895]">
            Find Us
          </p>

          <h2 className="font-[var(--font-fredoka)] text-4xl font-semibold leading-tight text-[#075A78] md:text-5xl lg:text-6xl">
            Come visit
            <br />
            <span className="text-[#16804B]">Early Tune.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-7 text-[#315667]">
            A warm and welcoming space where every child can learn, grow and
            thrive.
          </p>
        </motion.div>

        {/* Main Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden rounded-[2.5rem] border border-[#E1ECEE] bg-white shadow-[0_25px_80px_rgba(30,80,100,0.10)]"
        >
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* MAP */}
            <motion.div
              initial={{ opacity: 0, scale: 1.03 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative min-h-[400px] lg:min-h-[600px]"
            >
              <Image
                src={location.mapImage}
                alt={`${location.name} location map`}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />

              {/* Map overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#063B4C]/50 via-transparent to-transparent" />

              {/* Location badge */}
              <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full bg-white/90 px-4 py-2.5 shadow-lg backdrop-blur-md">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DDF7E8] text-[#16804B]">
                  <MapPin size={17} />
                </span>

                <span className="text-sm font-semibold text-[#075A78]">
                  Our Centre
                </span>
              </div>

              {/* Map button */}
              <a
                href={location.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#075A78] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#075A78] hover:text-white"
              >
                Open in Maps
                <ArrowUpRight size={16} />
              </a>
            </motion.div>

            {/* CONTENT */}
            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
              {/* Title */}
              <h3 className="font-[var(--font-fredoka)] text-3xl font-semibold leading-tight text-[#075A78] md:text-4xl">
                Early Tune
              </h3>

              <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0B7895]">
                Child Development Centre
              </p>

              <p className="mt-4 text-[15px] leading-6 text-[#5B7480]">
                A thoughtfully designed space dedicated to supporting children
                and families through every step of their journey.
              </p>

              {/* Divider */}
              <div className="my-7 h-px bg-[#E7EFF0]" />

              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E8F7FF] text-[#0B7895]">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8AA0A8]">
                    Location
                  </p>

                  <p className="mt-1 text-sm sm:text-sm leading-6 text-[#315667]">
                    {location.address}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="mt-6 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FFF5DF] text-[#C98516]">
                  <Clock3 size={20} />
                </div>

                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8AA0A8]">
                    Clinic Hours
                  </p>

                  <div className="mt-2 space-y-1.5">
                    {location.hours.map(([day, time]) => (
                      <div
                        key={day}
                        className="flex justify-between gap-4 text-xs sm:text-sm"
                      >
                        <span className="text-[#5B7480]">{day}</span>

                        <span
                          className={
                            time === "Closed"
                              ? "font-semibold text-[#D65A5A]"
                              : "font-medium text-[#315667]"
                          }
                        >
                          {time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="mt-6 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F2EDFF] text-[#7355C7]">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8AA0A8]">
                    Contact
                  </p>

                  <a
                    href={`tel:${location.phone}`}
                    className="mt-1 block font-[var(--font-fredoka)] text-lg font-semibold text-[#075A78] hover:text-[#0B7895]"
                  >
                    {location.phone}
                  </a>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${location.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-[#16804B] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#126B3E]"
                >
                  <MessageCircle size={17} />
                  WhatsApp
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </a>

                {/* Call */}
                <a
                  href={`tel:${location.phone}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#D8E7EA] bg-[#F8FCFC] px-5 py-3.5 text-sm font-semibold text-[#075A78] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8F7FF]"
                >
                  <Phone size={17} />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom reassurance */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-8 text-center text-sm text-[#6D858E]"
        >
          We look forward to welcoming you and your little one.
        </motion.p>
      </div>
    </section>
  );
}
