import hero from "@/assets/hero.jpg";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={hero}
        alt="Ankara çatı ve çelik konstrüksiyon ustaları çalışırken"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/85 via-onyx/55 to-onyx" />
      <div className="absolute inset-0 bg-radial-gold" />
      <div className="noise" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex-1 flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full grid lg:grid-cols-12 gap-10 pt-32 pb-20">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-8 animate-fade-in">
                <span className="gold-line" />
                <span className="eyebrow">Ankara · Est. 2008</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
                <span className="block text-foreground">Ankara'nın güvenilir</span>
                <span className="block mt-2 italic font-light text-silver-gradient">çatı ve demir</span>
                <span className="block mt-2 shimmer-text font-medium">işleri uzmanı.</span>
              </h1>

              <p className="mt-8 max-w-xl text-base sm:text-lg text-silver-dim leading-relaxed">
                On beş yılı aşkın ustalık. Çelik konstrüksiyondan ferforjeye, çatı kurulumundan
                izolasyona — her detayı milimetrik hassasiyetle, ömür boyu garantiyle teslim ediyoruz.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
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

              <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
                {[
                  { n: "15+", l: "Yıl Tecrübe" },
                  { n: "1200+", l: "Tamamlanan Proje" },
                  { n: "100%", l: "Müşteri Memnuniyeti" },
                ].map((s) => (
                  <div key={s.l} className="border-l border-gold/30 pl-4">
                    <div className="font-display text-3xl text-gold-gradient">{s.n}</div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-silver-dim mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex lg:col-span-4 items-end justify-end">
              <div className="glass-card rounded-sm p-8 max-w-xs">
                <div className="eyebrow mb-4">Ücretsiz Keşif</div>
                <p className="text-sm text-silver-dim leading-relaxed mb-6">
                  Projenizi yerinde inceliyor, fiyat teklifini 24 saat içinde size sunuyoruz.
                </p>
                <a
                  href="https://wa.me/905433372197"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold text-sm inline-flex items-center gap-2 group"
                >
                  Keşif talep edin
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-10 flex justify-center">
          <ChevronDown className="size-5 text-gold/60 animate-float" />
        </div>
      </div>
    </section>
  );
}
