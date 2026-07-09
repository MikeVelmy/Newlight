import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Sectors } from "@/components/sections/Sectors";
import { Packages } from "@/components/sections/Packages";
import { Guarantee } from "@/components/sections/Guarantee";
import { About } from "@/components/sections/About";
import { PaymentTerms } from "@/components/sections/PaymentTerms";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Sectors />
        <Packages />
        <Guarantee />
        <About />
        <PaymentTerms />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
