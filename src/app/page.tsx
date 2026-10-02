import Hero from "@/components/home/Hero";
import FeaturedIn from "@/components/home/FeaturedIn";
import Marquee from "@/components/home/Marquee";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhatWeBring from "@/components/home/WhatWeBring";
import AuthorityHub from "@/components/home/AuthorityHub";
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
      <FeaturedIn />
      <Marquee />
      <WhoWeHelp />
      <Services />
      <WhyChooseUs />
      <WhatWeBring />
      <AuthorityHub />
      <HowItWorks />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTABanner />
    </>
  );
}
