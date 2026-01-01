import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import HabeshaLogo from "../ui/HabeshaLogo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Products", href: "#products" },
    { name: "Culture", href: "#why-choose-us" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll listener to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // adjust for offset
      const sections = links.map((link) =>
        document.querySelector(link.href)
      );
      sections.forEach((section, idx) => {
        if (section && scrollPos >= section.offsetTop) {
          setActiveSection(links[idx].href.slice(1));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-habeshaDark sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo with hover animation */}
        <a
          href="#hero"
          className="flex items-center gap-2 hover:scale-105 hover:rotate-3 transition-transform duration-300"
        >
          <HabeshaLogo size={40} />
          <span className="text-habeshaGold font-heading font-bold text-xl">
            Habesha Grocery
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-semibold text-white">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`transition-colors duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "text-habeshaGold"
                    : "text-white hover:text-habeshaGold"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden bg-habeshaDark text-white flex flex-col items-center gap-6 py-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-habeshaGold text-lg font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
