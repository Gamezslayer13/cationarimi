import hero from "@/assets/hero.jpg";
import { Phone, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-onyx">
      {/* Cinematic background */}
      <img
        src={hero}
        alt="Ankara çatı ve çelik konstrüksiyon ustaları çalışırken"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover scale-110 animate-[heroPan_24s_ease-in-out_infinite_alternate]"
      />
      {/* Layered gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 via-onyx/40 to-onyx" />
      <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/40 to-transparent" />
      <div className="absolute inset-0 bg-radial-gold" />
      <div className="noise" />

      {/* Floating gold orb glow */}
      <div className="absolute top-1/3 right-[10%] size-[420px] rounded-full bg-gradient-gold opacity-[0.12] blur-[140px] pointer-events-none" />

      {/* Side index rail */}
      <div className="hidden xl:flex absolute left-10 top-1/2 -translate-y-1/2 flex-col gap-6 z-20">
        {["01 — Demir", "02 — Çatı", "03 — Konstrüksiyon", "04 — İzolasyon"].map((t) => (
          <div key={t} className="text-[10px] uppercase tracking-[0.4em] text-silver-dim/70 writing-mode-vertical">
            {t}
          </div>
        ))}
      </div>

      {/* Vertical side label */}
      <div className="hidden lg:block absolute right-10 top-32 z-20">
        <div className="text-[10px] uppercase tracking-[0.5em] text-gold/70 rotate-90 origin-top-right translate-x-full">
          Est. 2008 — Ankara
        </div>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex-1 flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full pt-32 pb-24">
            {/* Asymmetric grid */}
            <div className="grid grid-cols-12 gap-6">
              {/* Eyebrow row */}
              <div className="col-span-12 flex items-center gap-3 mb-6 animate-fade-in">
                <span className="gold-line" />
                <span className="eyebrow">Çatı & Demir İşleri · Ankara</span>
              </div>

              {/* Massive headline */}
              <h1 className="col-span-12 lg:col-span-10 font-display text-[44px] sm:text-7xl lg:text-[112px] xl:text-[128px] leading-[0.88] tracking-[-0.02em]">
                <span className="block text-foreground">Güçlü Yapılar,</span>
                <span className="block italic font-light text-silver-gradient pl-8 sm:pl-24 lg:pl-40">
                  kusursuz
                </span>
                <span className="block shimmer-text font-medium">işçilik.</span>
              </h1>

              {/* Subtext + CTAs offset right */}
              <div className="col-span-12 lg:col-span-5 lg:col-start-7 mt-12 lg:mt-16">
                <p className="text-base sm:text-lg text-silver-dim leading-relaxed border-l border-gold/30 pl-5">
                  On beş yılı aşkın atölye birikimi. Çelik konstrüksiyondan ferforjeye, çatı kurulumundan
                  izolasyona — her detayı milimetrik hassasiyetle, yazılı garantiyle teslim ediyoruz.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="https://wa.me/905433372197"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold rounded-sm px-7 py-4 text-sm font-medium tracking-wide inline-flex items-center gap-3"
                  >
                    <MessageCircle className="size-4" />
                    WhatsApp ile Yazın
                  </a>
                  <a
                    href="tel:+905433372197"
                    className="btn-outline-gold rounded-sm px-7 py-4 text-sm font-medium tracking-wide inline-flex items-center gap-3"
                  >
                    <Phone className="size-4" />
                    Hemen Arayın
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="relative z-10 border-t border-gold/15 backdrop-blur-md bg-onyx/40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              {[
                { n: "15+", l: "Yıl" },
                { n: "1200+", l: "Proje" },
                { n: "%100", l: "Memnuniyet" },
              ].map((s) => (
                <div key={s.l} className="flex items-baseline gap-2">
                  <span className="font-display text-2xl text-gold-gradient">{s.n}</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-silver-dim">
                    {s.l}
                  </span>
                </div>
              ))}
            </div>
            <a href="#hizmetler" className="text-xs uppercase tracking-[0.3em] text-gold/80 hover:text-gold transition flex items-center gap-3 group">
              Hikayeyi Keşfet
              <span className="h-px w-10 bg-gold/60 group-hover:w-16 transition-all" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroPan {
          0% { transform: scale(1.1) translate(0, 0); }
          100% { transform: scale(1.15) translate(-2%, -1%); }
        }
      `}</style>
    </section>
  );
}
