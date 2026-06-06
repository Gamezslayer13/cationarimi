import { Quote, Star } from "lucide-react";

const items = [
  {
    name: "Mehmet Yıldız",
    role: "Villa Sahibi · Çankaya",
    text: "Çatımızı sıfırdan yenilediler. İşçilik, malzeme ve teslim süresi mükemmeldi. Ankara'nın kar yükünde bile en ufak sorun yaşamadık.",
  },
  {
    name: "Aysel Demir",
    role: "Mimar · Yenimahalle",
    text: "Projelerimde defalarca çalıştım. Ferforje detayları gerçekten sanat eseri. Müşterilerime gönül rahatlığıyla öneriyorum.",
  },
  {
    name: "Hakan Kaya",
    role: "Fabrika Yöneticisi · Sincan",
    text: "1200 m² çelik konstrüksiyon çatımızı zamanında ve bütçemizin altında tamamladılar. Profesyonel bir ekiple çalışmak büyük ayrıcalıktı.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 bg-gradient-onyx">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16 reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="eyebrow">Müşteri Yorumları</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Sözümüzün <span className="italic text-gold-gradient">ardındakiler.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure
              key={t.name}
              className="glass-card glass-card-hover rounded-sm p-8 reveal flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="size-8 text-gold/40 mb-6" strokeWidth={1} />
              <blockquote className="text-foreground/90 leading-relaxed flex-1">
                "{t.text}"
              </blockquote>
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <div className="font-display text-lg">{t.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-silver-dim mt-1">{t.role}</div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
