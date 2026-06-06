import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const services = [
  { n: "01", title: "Demir İşleri", sub: "Ferforje · Doğrama · Korkuluk", img: p1, desc: "Elle bükülen demir, milimetrik kaynak — sanat ile mühendislik buluşması." },
  { n: "02", title: "Çatı Sistemleri", sub: "Kurulum · Aktarma · Tamirat", img: p2, desc: "Sıfırdan anahtar teslim; her iklim koşulu için ömür boyu dayanım." },
  { n: "03", title: "Çelik Konstrüksiyon", sub: "Endüstriyel · Mimari", img: p3, desc: "Geniş açıklıklı yapı çözümleri, statik hesap ve hızlı montaj." },
  { n: "04", title: "Kaynak İşleri", sub: "Argon · MIG · Elektrik", img: p5, desc: "Sertifikalı operatörlerden görünmez, kusursuz birleşimler." },
  { n: "05", title: "Yalıtım", sub: "Isı · Ses · Su", img: p4, desc: "Çatıdan cepheye, enerji ve konfor için bütüncül izolasyon." },
  { n: "06", title: "Garaj Kapıları", sub: "Motorlu · Otomatik", img: p6, desc: "Premium motor sistemleri ile sessiz, güvenli, prestijli giriş." },
  { n: "07", title: "Merdiven & Korkuluk", sub: "İç · Dış · Asılı", img: p3, desc: "Yapısal güç ile estetik dengeyi kuran çelik silüetler." },
  { n: "08", title: "Sundurma & Teras", sub: "Cam · Polikarbon · Pergola", img: p4, desc: "Mevsimden bağımsız yaşam alanları için modern üst örtüler." },
];

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="hizmetler" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-x-0 top-0 gold-divider" />

      {/* Floating preview image */}
      <div className="pointer-events-none absolute top-1/2 right-[6vw] -translate-y-1/2 hidden lg:block z-0">
        <div className="relative w-[420px] h-[540px]">
          {services.map((s, i) => (
            <div
              key={s.n}
              className={`absolute inset-0 transition-all duration-[1100ms] ease-out ${
                hovered === i ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-95 rotate-1"
              }`}
            >
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-3xl" />
              <div className="relative h-full w-full overflow-hidden rounded-sm border border-gold/30">
                <img src={s.img} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <div className="eyebrow text-gold mb-1">{s.n}</div>
                  <div className="font-display text-3xl text-foreground">{s.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5 reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-line" />
              <span className="eyebrow">Signature Services</span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              Bir <span className="italic text-gold-gradient">imza</span>
              <br />
              gibi <span className="shimmer-text font-medium">işlenir.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-8 self-end reveal">
            <p className="text-silver-dim leading-relaxed">
              Sekiz disiplin — tek bir ustalık standardı. Her hizmet, atölyemizin elli yıllık bilgi
              birikimiyle teslim edilir.
            </p>
          </div>
        </div>

        <ul className="relative lg:max-w-[58%]">
          {services.map((s, i) => (
            <li
              key={s.n}
              className="group reveal border-t border-border last:border-b"
              style={{ transitionDelay: `${i * 50}ms` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <a
                href="#iletisim"
                className="flex items-baseline gap-6 sm:gap-10 py-7 sm:py-9 px-2 transition-all duration-700"
              >
                <span className="font-display text-sm text-gold/40 tabular-nums w-8 shrink-0">
                  {s.n}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight transition-all duration-700 group-hover:translate-x-4">
                    <span className="text-foreground group-hover:text-gold-gradient">
                      {s.title}
                    </span>
                  </div>
                  <div
                    className="grid transition-all duration-700 ease-out grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-60 group-hover:opacity-100"
                  >
                    <div className="overflow-hidden">
                      <p className="pt-3 text-sm text-silver-dim max-w-md leading-relaxed">
                        <span className="eyebrow text-gold/60 mr-3">{s.sub}</span>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>

                <ArrowUpRight
                  className="size-5 text-gold/40 transition-all duration-700 group-hover:text-gold group-hover:rotate-45 shrink-0"
                  strokeWidth={1.4}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
