import React from "react";

export default function CTASection() {
  return (
    <section id="contact" className="py-20 bg-habeshaRed/10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading text-habeshaDark font-bold mb-6">
          Ready to Explore Authentic Habesha Products?
        </h2>
        <p className="text-gray-800 mb-8 text-lg md:text-xl">
          Visit us in-store or reach out to place an order. We’d love to serve you!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          <a
            href="#products"
            className="px-8 py-4 bg-habeshaGold text-habeshaDark font-bold rounded-lg shadow-lg hover:bg-habeshaGreen transition-colors duration-300"
          >
            Browse Products
          </a>
          <a
            href="tel:+16417584943"
            className="px-8 py-4 bg-habeshaGreen text-white font-bold rounded-lg shadow-lg hover:bg-habeshaDark transition-colors duration-300"
          >
            Call Us
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-gray-800 space-y-2">
          <p className="font-semibold">Habesha/Tropical Grocery Store</p>
          <p>📞 (641) 758-4943</p>
          <p>📍 424 20th St, Sioux City, IA 51104</p>
        </div>
      </div>
    </section>
  );
}
