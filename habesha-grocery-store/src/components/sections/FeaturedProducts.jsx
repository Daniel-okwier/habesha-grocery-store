import React from "react";
import { products } from "../../data/products";

export default function FeaturedProducts() {
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <section id="products" className="py-20 bg-habeshaDark">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading text-habeshaGold font-bold text-center mb-12">
          Our Products
        </h2>

        {categories.map((category, index) => (
          <div
            key={category}
            className={`mb-16 p-6 rounded-xl ${
              index % 2 === 0 ? "bg-habeshaDark" : "bg-habeshaRed/10"
            }`}
          >
            <h3 className="text-2xl font-heading text-habeshaGold font-semibold mb-6">
              {category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 auto-rows-fr">
              {products
                .filter((p) => p.category === category)
                .map((product, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col h-full"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-48 md:h-56 object-cover"
                    />
                    <div className="p-4 flex-1 flex flex-col">
                      <h4 className="text-lg font-heading font-bold mb-2">
                        {product.name}
                      </h4>
                      <p className="text-gray-700 text-sm flex-1">
                        {product.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
