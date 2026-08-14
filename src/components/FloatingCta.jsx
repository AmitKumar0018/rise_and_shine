import { Phone, MessageCircle } from "lucide-react";

export default function FloatingCta() {
  return (
    <>
      <a
        href="tel:+917989087357"
        aria-label="Call Early Tune"
        className="group fixed left-4 top-1/2 z-[90] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#0B7895] text-white shadow-[0_8px_25px_rgba(11,120,149,0.3)] transition-all duration-300 hover:scale-110 md:left-6 md:h-14 md:w-14"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#0B7895] opacity-20" />
        <Phone size={22} />
      </a>

      <a
        href="https://wa.me/917989087357"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed right-4 top-1/2 z-[90] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#00B84F] text-white shadow-[0_8px_25px_rgba(0,184,79,0.3)] transition-all duration-300 hover:scale-110 md:right-6 md:h-14 md:w-14"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#00B84F] opacity-20" />
        <MessageCircle size={25} />
      </a>
    </>
  );
}
