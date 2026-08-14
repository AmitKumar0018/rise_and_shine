export default function Footer() {
  return (
    <footer className="border-t border-[#DDECEF] bg-[#F8FCFA]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 sm:flex-row">
        {/* Brand */}
        <p className="text-sm font-medium text-[#315667]">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-[#075A78]">Early Tune</span>. All
          rights reserved.
        </p>

        {/* Links */}
        <div className="flex items-center gap-5 text-sm text-[#6D858E]">
          <a href="#about" className="transition-colors hover:text-[#0B7895]">
            About
          </a>

          <a
            href="#services"
            className="transition-colors hover:text-[#0B7895]"
          >
            Services
          </a>

          <a href="#contact" className="transition-colors hover:text-[#0B7895]">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
