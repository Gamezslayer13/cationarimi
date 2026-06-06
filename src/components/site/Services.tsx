import {
  DoorClosed, Fence, Warehouse, MoveUp, Layers, Hammer,
  Wind, Zap, Home, RefreshCw, Droplets, Wrench,
  Umbrella, Sun, Shield, PaintRoller, Lightbulb, Box, Mountain
} from "lucide-react";

const services = [
  { icon: DoorClosed, title: "Demir Kapı Doğrama", desc: "Ferforje sanatı ve modern çelik birleşimi." },
  { icon: Fence, title: "Kapı Pencere Korkuluk", desc: "Estetik ve güvenlik bir arada." },
  { icon: Warehouse, title: "Garaj Kapıları", desc: "Motorlu, otomatik premium çözümler." },
  { icon: MoveUp, title: "Merdiven İşleri", desc: "İç ve dış mekan çelik merdivenler." },
  { icon: Layers, title: "Asma Kat ve Asma Tavan", desc: "Hacmi ikiye katlayan tasarımlar." },
  { icon: Box, title: "Konstrüksiyon Yapı Kurulumu", desc: "Endüstriyel çelik yapı sistemleri." },
  { icon: Fence, title: "Bahçe Çit Telleri", desc: "Dayanıklı tel örgü ve panel çit." },
  { icon: Wind, title: "Baca Şapkası", desc: "Yağmur ve rüzgara karşı tam koruma." },
  { icon: Zap, title: "Kaynak İşleri", desc: "Argon, MIG ve elektrik kaynağı." },
  { icon: Mountain, title: "Rüzgar Gülü", desc: "Geleneksel ve dekoratif rüzgar gülleri." },
  { icon: Home, title: "Çatı Kurulumu", desc: "Sıfırdan anahtar teslim çatı sistemleri." },
  { icon: RefreshCw, title: "Çatı Aktarma", desc: "Kiremit aktarma ve yenileme." },
  { icon: Droplets, title: "Çatı Oluğu", desc: "Galvaniz ve PVC oluk uygulamaları." },
  { icon: Wrench, title: "Çatı Tamiratı", desc: "Akıntı, çökme ve hasar onarımı." },
  { icon: Umbrella, title: "Teras Kapama", desc: "Cam ve polikarbon teras sistemleri." },
  { icon: Sun, title: "Sundurma", desc: "Pergola ve modern sundurma çözümleri." },
  { icon: Shield, title: "İzolasyon ve Yalıtım", desc: "Isı, ses ve su yalıtımı." },
  { icon: PaintRoller, title: "Çatı Tahliye Boruları", desc: "Sızdırmaz, profesyonel tahliye sistemleri." },
  { icon: Lightbulb, title: "Bina Aydınlatmaları", desc: "Cephe ve dış mekan aydınlatma." },
  { icon: Hammer, title: "Özel Üretim", desc: "Projeye özel tasarım ve imalat." },
];

export function Services() {
  return (
    <section id="hizmetler" className="relative py-32 bg-gradient-onyx">
      <div className="absolute inset-x-0 top-0 gold-divider" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-20 reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="eyebrow">Hizmetlerimiz</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Her detayda <span className="italic text-gold-gradient">ustalık.</span>
          </h2>
          <p className="mt-6 text-silver-dim text-lg leading-relaxed">
            Çatıdan demir işlerine, Ankara'nın dört bir yanında uçtan uca çözümler sunuyoruz.
            Her proje, atölyemizdeki ilk kıvılcımdan teslimine kadar tek bir ekibin sorumluluğunda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="glass-card glass-card-hover rounded-sm p-7 reveal group"
                style={{ transitionDelay: `${(i % 4) * 70}ms` }}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="size-12 rounded-sm bg-onyx flex items-center justify-center border border-gold/20 group-hover:border-gold/60 transition-colors">
                    <Icon className="size-5 text-gold" strokeWidth={1.4} />
                  </div>
                  <span className="font-display text-sm text-gold/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-silver-dim leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
