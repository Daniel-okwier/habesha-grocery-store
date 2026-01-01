import React from "react";
import cultureImg from "../../assets/images/hero/hero.png";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Authentic Habesha Products",
      description:
        "We carefully source every item to bring the true taste and aroma of Ethiopia and Eritrea to your home.",
    },
    {
      title: "Cultural Heritage",
      description:
        "From traditional coffee pots to spices, every product reflects Habesha culture and tradition.",
    },
    {
      title: "Premium Quality",
      description:
        "We prioritize freshness and quality to ensure every ingredient and item exceeds your expectations.",
    },
    {
      title: "Community & Care",
      description:
        "Supporting local farmers, artisans, and producers while giving you the best service experience.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-habeshaGreen/5">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading text-habeshaGold font-bold text-center mb-12">
          Why Choose Habesha Grocery Store?
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={cultureImg}
              alt="Habesha Culture"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          {/* Reasons */}
          <div className="md:w-1/2 grid grid-cols-1 gap-8">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-heading font-bold text-habeshaRed mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
