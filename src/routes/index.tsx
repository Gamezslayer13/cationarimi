import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Loader } from "@/components/site/Loader";
import { Marquee } from "@/components/site/Marquee";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Binaltın Yapı — Ankara Çatı ve Demir İşleri Uzmanı" },
      {
        name: "description",
        content:
          "Ankara'da 15+ yıl deneyimle çatı kurulumu, demir doğrama, ferforje, çelik konstrüksiyon, sundurma ve izolasyon. Ücretsiz keşif: 0543 337 21 97.",
      },
      { property: "og:title", content: "Binaltın Yapı — Ankara Çatı ve Demir İşleri Uzmanı" },
      { property: "og:description", content: "Ankara'nın güvenilir çatı ve demir işleri ustası. Ücretsiz keşif ve teklif." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Binaltın Yapı",
          image: "/hero.jpg",
          description: "Ankara'da çatı ve demir işleri uzmanı.",
          telephone: "+90 543 337 21 97",
          email: "binaltinyapi@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Ulubey Mh. 866. Sk. No: 4/1",
            addressLocality: "Altındağ",
            addressRegion: "Ankara",
            addressCountry: "TR",
          },
          areaServed: "Ankara",
          priceRange: "₺₺",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="relative bg-background text-foreground overflow-x-hidden">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <WhyUs />
        <Gallery />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
