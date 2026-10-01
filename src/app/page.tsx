import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhatWeBring from "@/components/home/WhatWeBring";
import HowItWorks from "@/components/home/HowItWorks";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhoWeHelp />
      <Services />
      <WhyChooseUs />
      <WhatWeBring />
      <HowItWorks />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTABanner />
    </>
  );
}
