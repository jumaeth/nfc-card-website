import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Logos } from "@/components/Logos";
import { HowItWorks } from "@/components/HowItWorks";
import { UseCases } from "@/components/UseCases";
import { Features } from "@/components/Features";
import { Products } from "@/components/Products";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Logos />
        <HowItWorks />
        <UseCases />
        <Features />
        <Products />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
