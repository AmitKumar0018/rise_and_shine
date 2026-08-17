import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[#DDECEF] bg-[#F8FCFA]">
      <div className="mx-auto max-w-7xl px-6 py-6">
        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          {/* Brand */}
          <p className="text-sm font-medium text-[#315667]">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-[#075A78]">Early Tune</span>.
            All rights reserved.
          </p>

          {/* Links + Social */}
          <div className="flex items-center gap-5">
            {/* Navigation */}
            <div className="flex items-center gap-5 text-sm text-[#6D858E]">
              <a
                href="#about"
                className="transition-colors hover:text-[#0B7895]"
              >
                About
              </a>

              <a
                href="#services"
                className="transition-colors hover:text-[#0B7895]"
              >
                Services
              </a>

              <a
                href="#contact"
                className="transition-colors hover:text-[#0B7895]"
              >
                Contact
              </a>
            </div>

            {/* Divider */}
            <div className="hidden h-5 w-px bg-[#DDECEF] sm:block" />

            {/* Social Media */}
            <div className="flex items-center gap-2">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/early_tune_?igsh=MXV0Z3g1MHEwczdybw%3D%3D&igsi=MXV0Z3g1MHEwczdybw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF0F5] text-[#D9467A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D9467A] hover:text-white"
              >
                <FaInstagram size={17} />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1DYPdZXZ3n/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF2FF] text-[#1877F2] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white"
              >
                <FaFacebookF size={16} />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@earlytunecdc?si=qmn1saJh9CES9fBc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF0F0] text-[#FF0000] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF0000] hover:text-white"
              >
                <FaYoutube size={18} />
              </a>
              {/* Email */}
              <a
                href="mailto:earlytunecdc26@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Early Tune"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF4E8] text-[#D44638] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D44638] hover:text-white"
              >
                <FaEnvelope size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
