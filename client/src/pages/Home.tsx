import { Header }        from "@/components/sections/Header";
import { Hero }          from "@/components/sections/Hero";
import { Occasions }     from "@/components/sections/Occasions";
import { Gallery }       from "@/components/sections/Gallery";
import { WhyUs }         from "@/components/sections/WhyUs";
import { Branches }      from "@/components/sections/Branches";
import { Contact }       from "@/components/sections/Contact";
import { Footer }        from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function Home() {
  const { isScrolled } = useScrollPosition();

  return (
    <div
      dir="rtl"
      className="min-h-screen overflow-x-hidden"
      style={{ backgroundColor: "#F5F1E7" }}
    >
      <Header isScrolled={isScrolled} />

      <main>
        <Hero />
        <Occasions />
        <Gallery />
        <WhyUs />
        <Branches />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
