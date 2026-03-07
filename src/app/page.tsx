import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PortfolioGrid from "@/components/PortfolioGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PortfolioGrid />
      <WhyChooseUs />
      <TestimonialCarousel />
      <CTASection />
    </>
  );
}
