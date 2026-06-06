import { Award, Clock, Users, HeartHandshake, FileCheck } from "lucide-react";

const items = [
  { icon: Award, title: "Kaliteli İşçilik", desc: "Birinci sınıf malzeme, sertifikalı ustalar." },
  { icon: Clock, title: "Hızlı Servis", desc: "Acil çatı tamiratlarında aynı gün müdahale." },
  { icon: Users, title: "Profesyonel Ekip", desc: "Uzman kadromuzla anahtar teslim hizmet." },
  { icon: HeartHandshake, title: "Müşteri Memnuniyeti", desc: "1200+ tamamlanmış projede %100 memnuniyet." },
  { icon: FileCheck, title: "Ücretsiz Keşif", desc: "Yerinde inceleme ve şeffaf fiyat teklifi." },
];

export function WhyUs() {
  return (
    <section id="neden-biz" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-line" />
              <span className="eyebrow">Neden Binaltın</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Ustalığın <br />
              <span className="italic text-gold-gradient">altın standardı.</span>
            </h2>
            <p className="mt-6 text-silver-dim leading-relaxed">
              Her projeye kendi evimizmiş gibi yaklaşırız. İlk telefondan son vidaya kadar,
              güveninize layık olmak için çalışırız.
            </p>
            <div className="mt-10 p-6 glass-card rounded-sm">
              <p className="font-display text-lg italic text-foreground/90 leading-relaxed">
                "Bir çatı sadece bir yapı değil — ailenizin altındaki söz."
              </p>
              <div className="mt-4 text-sm text-gold">— Ahmet Altınsoy, Kurucu</div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-px">
            {items.map((it, i) => {
              const Icon = it.icon;
              return (
                <div
                  key={it.title}
                  className="reveal group flex gap-6 items-start py-8 border-t border-border first:border-t-0 hover:bg-onyx-elevated/40 transition-colors duration-500 px-2"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="font-display text-2xl text-gold/40 w-12 shrink-0 pt-1">
                    0{i + 1}
                  </div>
                  <div className="size-12 rounded-sm bg-gradient-gold flex items-center justify-center shrink-0 shadow-gold">
                    <Icon className="size-5 text-onyx" strokeWidth={1.6} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl mb-2 group-hover:text-gold transition-colors">{it.title}</h3>
                    <p className="text-silver-dim leading-relaxed">{it.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
