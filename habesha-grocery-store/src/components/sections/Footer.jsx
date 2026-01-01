import React from "react";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-habeshaDark text-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-heading font-bold text-habeshaGold">
            Habesha Grocery Store
          </h3>
          <p className="text-gray-300 mt-1">
            Authentic Habesha products from spices to coffee, straight to your home.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <p>📞 (641) 758-4943</p>
          <p>📍 424 20th St, Sioux City, IA 51104</p>
        </div>

        {/* Social Link */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://web.facebook.com/HabeshaGroceryStore/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-habeshaGold transition-colors duration-300"
          >
            <FaFacebook size={28} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Habesha Grocery Store. All rights reserved.
      </div>
    </footer>
  );
}
