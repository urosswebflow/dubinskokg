import type { Metadata } from "next";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { Pricing } from "@/components/pricing";
import { Services } from "@/components/services";
import { WhyUs } from "@/components/why-us";
import { localBusinessJsonLd, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: siteUrl ? { canonical: "/" } : undefined,
};

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <Header />
      <main id="sadrzaj">
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
