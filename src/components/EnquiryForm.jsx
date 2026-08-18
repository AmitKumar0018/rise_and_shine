"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, HeartHandshake } from "lucide-react";
import logo from "../../public/logo/logo.webp";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    therapy: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "917989087357";

    const message = `
         New Enquiry - Early Tune

          Name: ${formData.name}
          Phone: ${formData.phone}
          Email: ${formData.email}
          Therapy Required: ${formData.therapy}

         Message:
        ${formData.message}
         `;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#FFFDF7] px-6 py-8 md:px-10 lg:py-15">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_70px_rgba(30,80,100,0.10)] lg:grid lg:grid-cols-[0.85fr_1.15fr]">
        {/* ================= LEFT SIDE ================= */}
        <div className="relative flex min-h-[520px] flex-col justify-between overflow-hidden bg-[#EAF7F5] p-8 md:p-12 lg:p-14">
          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#B8D9C8]/50" />

          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#DCCFFF]/50" />

          {/* Content */}
          <div className="relative z-10">
            {/* Logo */}
            <div className="mb-10 flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-full bg-white shadow-sm">
                <Image
                  src={logo}
                  alt="Early Tune logo"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col leading-none">
                <span className="font-[var(--font-fredoka)] text-2xl font-bold tracking-tight">
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

                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#0B7895]">
                  Child Development Centre
                </span>
              </div>
            </div>

            {/* Heading */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0B7895]">
              Let's Connect
            </p>

            <h2 className="max-w-md font-[var(--font-fredoka)] text-4xl font-semibold leading-tight text-[#075A78] md:text-5xl">
              Every little step
              <br />
              <span className="text-[#16804B]">matters.</span>
            </h2>

            <p className="mt-5 max-w-md text-[15px] leading-7 text-[#5B7480]">
              Have questions about your child's development or want to schedule
              an appointment? We're here to listen, understand and support your
              journey.
            </p>

            {/* Feature */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#16804B] shadow-sm">
                <HeartHandshake size={21} />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#075A78]">
                  Child-centred care
                </p>

                <p className="text-xs text-[#6D858E]">
                  Supporting every child's unique journey
                </p>
              </div>
            </div>
          </div>

          {/* Bottom message */}
          <div className="relative z-10 mt-10 rounded-2xl bg-white/70 p-5 backdrop-blur-sm">
            <p className="font-[var(--font-fredoka)] text-lg font-semibold text-[#075A78]">
              We're here for you 💚
            </p>

            <p className="mt-1 text-sm leading-6 text-[#5B7480]">
              Send us your details and our team will get in touch with you.
            </p>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="p-8 md:p-12 lg:p-14">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0B7895]">
              Get In Touch
            </p>

            <h3 className="mt-2 font-[var(--font-fredoka)] text-3xl font-semibold text-[#075A78] md:text-4xl">
              Send Us An Enquiry
            </h3>

            <p className="mt-2 max-w-lg text-sm leading-6 text-[#5B7480]">
              Tell us a little about how we can help. Our team will connect with
              you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#315667]">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-[#DDECEF] bg-[#F8FCFC] px-4 py-3.5 text-sm text-[#315667] outline-none transition-all duration-300 placeholder:text-[#9BAEB4] focus:border-[#0B7895] focus:bg-white focus:ring-4 focus:ring-[#0B7895]/10"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#315667]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  required
                  className="w-full rounded-xl border border-[#DDECEF] bg-[#F8FCFC] px-4 py-3.5 text-sm text-[#315667] outline-none transition-all duration-300 placeholder:text-[#9BAEB4] focus:border-[#0B7895] focus:bg-white focus:ring-4 focus:ring-[#0B7895]/10"
                />
              </div>

              {/* Email */}
              <div className="w-full">
                <label className="mb-2 block text-sm font-medium text-[#315667]">
                  Email
                  <span className="ml-1 text-xs font-normal text-[#9BAEB4]">
                    (Optional)
                  </span>
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="yourname@example.com"
                  className="w-full rounded-xl border border-[#DDECEF] bg-[#F8FCFC] px-4 py-3.5 text-sm text-[#315667] outline-none transition-all duration-300 placeholder:text-[#9BAEB4] focus:border-[#0B7895] focus:bg-white focus:ring-4 focus:ring-[#0B7895]/10"
                />
              </div>

              {/* Therapy */}
              <div className="w-full">
                <label className="mb-2 block text-sm font-medium text-[#315667]">
                  Therapy Required
                </label>

                <select
                  name="therapy"
                  value={formData.therapy}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#DDECEF] bg-[#F8FCFC] px-4 py-3.5 text-sm text-[#315667] outline-none transition-all duration-300 focus:border-[#0B7895] focus:bg-white focus:ring-4 focus:ring-[#0B7895]/10"
                >
                  <option value="">Select a therapy</option>
                  <option value="Speech Therapy">Speech Therapy</option>
                  <option value="Occupational Therapy">
                    Occupational Therapy
                  </option>
                  <option value="Physiotherapy">Physiotherapy</option>
                  <option value="Special Education">Special Education</option>
                  <option value="Behavioural Therapy">
                    Behavioural Therapy
                  </option>
                  <option value="Developmental Assessment">
                    Developmental Assessment
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-[#315667]">
                  How can we help?
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your enquiry..."
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-[#DDECEF] bg-[#F8FCFC] px-4 py-3.5 text-sm text-[#315667] outline-none transition-all duration-300 placeholder:text-[#9BAEB4] focus:border-[#0B7895] focus:bg-white focus:ring-4 focus:ring-[#0B7895]/10"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#16804B] px-6 py-4 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(22,128,75,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#126B3E] hover:shadow-[0_15px_30px_rgba(22,128,75,0.25)] cursor-pointer"
            >
              <MessageCircle
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              Send Enquiry on WhatsApp
            </button>

            <p className="mt-4 text-center text-xs text-[#8AA0A8]">
              Your enquiry will open directly in WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
