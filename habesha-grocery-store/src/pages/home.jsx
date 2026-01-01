import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import CTASection from "../components/sections/CTASection";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </>
  );
}
