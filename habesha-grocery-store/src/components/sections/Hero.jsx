import React from "react";
import heroImage from "../../assets/images/hero/hero.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-heading text-habeshaGold font-bold mb-6">
          Welcome to Habesha Grocery Store
        </h1>
        <p className="text-white text-lg md:text-xl mb-8">
          Your destination for authentic Ethiopian ingredients.
        </p>
        <a
          href="#products"
          className="inline-block px-8 py-4 bg-habeshaRed text-white font-bold rounded-lg shadow-lg hover:bg-habeshaGold hover:text-habeshaDark transition-all duration-300"
        >
          Explore Products
        </a>
      </div>
    </section>
  );
}
