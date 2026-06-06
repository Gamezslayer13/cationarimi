import { Award, Clock, ShieldCheck, Sparkles } from "lucide-react";

const stats = [
  { n: "15+", l: "Yıllık Tecrübe", sub: "Atölyeden sahaya, kesintisiz ustalık." },
  { n: "1200+", l: "Tamamlanan Proje", sub: "Konuttan endüstriyele çeşitli ölçekler." },
  { n: "%100", l: "Müşteri Memnuniyeti", sub: "Sözleşmeli garanti, şeffaf süreç." },
  { n: "24s", l: "Acil Müdahale", sub: "Hasar bildirimine aynı gün cevap." },
];

const pillars = [
  { icon: Award, t: "Sertifikalı Ustalık", d: "Kaynak ve montaj sertifikalı kadromuzla — her bağlantı, ömür boyu güvenle." },
  { icon: ShieldCheck, t: "Yazılı Garanti", d: "Hizmete göre 2–10 yıl arası işçilik garantisi. Sözleşmede net yazılı." },
  { icon: Clock, t: "Zamanında Teslim", d: "Plana sadık, geciktirmeyen ekip yönetimi. Her projede gün takvimi." },
  { icon: Sparkles, t: "Detay Tutkusu", d: "Görünmeyen birleşimler bile mükemmel olana kadar bitmiş sayılmaz." },
];

export function WhyUs() {
  return (
    <section id="neden-biz" className="relative py-32 lg:py-40 overflow-hidden bg-gradient-onyx">
      {/* radial gold glow */}
      <div className="absolute inset-x-0 top-0 h-[80%] bg-radial-gold pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Asymmetric header */}
        <div className="grid grid-cols-12 gap-6 mb-24">
          <div className="col-span-12 lg:col-span-8 reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-line" />
              <span className="eyebrow">Neden Binaltın</span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.9] tracking-tight">
              <span className="block">Güven bir</span>
              <span className="block italic text-gold-gradient font-light">malzeme</span>
              <span className="block">değildir —</span>
              <span className="block shimmer-text font-medium pl-12 sm:pl-32">işlenir.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-10 self-end reveal">
            <p className="text-silver-dim leading-relaxed">
              Her projeye kendi evimizmiş gibi yaklaşırız. İlk telefondan son vidaya kadar,
              güveninize layık olmak için çalışırız.
            </p>
            <div className="mt-6 font-display italic text-gold">— Ahmet Altınsoy</div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-silver-dim mt-1">
              Kurucu Usta
            </div>
          </div>
        </div>

        {/* Floating asymmetric stat blocks */}
        <div className="relative mb-32">
          <div className="grid grid-cols-12 gap-5 lg:gap-6">
            {stats.map((s, i) => {
              const layout = [
                "col-span-6 lg:col-span-3 lg:translate-y-0",
                "col-span-6 lg:col-span-3 lg:translate-y-12",
                "col-span-6 lg:col-span-3 lg:-translate-y-6",
                "col-span-6 lg:col-span-3 lg:translate-y-16",
              ];
              return (
                <div
                  key={s.l}
                  className={`reveal ${layout[i]} group`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="relative glass-card rounded-sm p-7 lg:p-8 h-full overflow-hidden transition-all duration-700 hover:border-gold/50 hover:-translate-y-2">
                    <div className="absolute -top-12 -right-12 size-32 bg-gradient-gold opacity-10 blur-2xl group-hover:opacity-25 transition-opacity duration-1000" />
                    <div className="relative">
                      <div className="font-display text-5xl lg:text-6xl text-gold-gradient leading-none">
                        {s.n}
                      </div>
                      <div className="mt-5 font-display text-lg text-foreground">{s.l}</div>
                      <div className="mt-2 text-xs text-silver-dim leading-relaxed">{s.sub}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pillars — alternating editorial rows */}
        <div className="space-y-px">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const isAlt = i % 2 === 1;
            return (
              <div
                key={p.t}
                className={`reveal group grid grid-cols-12 gap-6 items-center py-10 border-t border-border hover:bg-onyx-elevated/30 transition-all duration-700 px-2 ${
                  isAlt ? "lg:pl-32" : ""
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="col-span-2 lg:col-span-1 font-display text-2xl text-gold/40 tabular-nums">
                  0{i + 1}
                </div>
                <div className="col-span-10 lg:col-span-1">
                  <div className="size-12 rounded-sm bg-onyx flex items-center justify-center border border-gold/30 group-hover:border-gold transition-colors">
                    <Icon className="size-5 text-gold" strokeWidth={1.4} />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-5">
                  <h3 className="font-display text-3xl lg:text-4xl group-hover:text-gold-gradient transition-all duration-700">
                    {p.t}
                  </h3>
                </div>
                <div className="col-span-12 lg:col-span-5">
                  <p className="text-silver-dim leading-relaxed">{p.d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
