import about from "@/assets/about.jpg";

export function About() {
  return (
    <section id="hakkimizda" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal relative">
          <div className="absolute -inset-3 bg-gradient-gold opacity-30 blur-2xl rounded-sm" />
          <div className="relative overflow-hidden rounded-sm border border-gold/30">
            <img
              src={about}
              alt="Ankara'da tamamlanan kiremit çatı projesi havadan görünüm"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full h-[520px] object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 lg:-right-8 glass-card rounded-sm p-6 max-w-xs shadow-elevated">
            <div className="font-display text-4xl text-gold-gradient">15+</div>
            <div className="text-xs uppercase tracking-[0.2em] text-silver-dim mt-2">
              Yıllık çatı altında <br /> kazanılan güven
            </div>
          </div>
        </div>

        <div className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="eyebrow">Hakkımızda</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Ankara'nın gökyüzünü <br />
            <span className="italic text-gold-gradient">örten eller.</span>
          </h2>
          <div className="mt-8 space-y-5 text-silver-dim leading-relaxed">
            <p>
              Binaltın Yapı, 2008 yılında usta Ahmet Altınsoy önderliğinde Ankara'da kuruldu.
              Küçük bir atölyede başlayan yolculuğumuz, bugün Altındağ merkezli geniş kapsamlı bir
              çatı ve demir işleri kuruluşuna dönüştü.
            </p>
            <p>
              Konutlardan endüstriyel tesislere, ferforje sanatından çelik konstrüksiyona kadar
              her ölçekte iş üretiyoruz. Ankara'nın iklimine ve mimari dokusuna hakim ekibimizle,
              onlarca yıl dayanan yapılar inşa ediyoruz.
            </p>
            <p>
              Bizim için her proje, ailemizin imzasını taşır. İşte bu yüzden teslim ettiğimiz
              her çatı, her kapı, her merdiven — <span className="text-gold-soft">altın değerinde</span>.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="p-6 border border-border rounded-sm">
              <div className="font-display text-3xl text-gold-gradient">Altındağ</div>
              <div className="text-xs uppercase tracking-[0.2em] text-silver-dim mt-2">Merkez Atölye</div>
            </div>
            <div className="p-6 border border-border rounded-sm">
              <div className="font-display text-3xl text-gold-gradient">Ankara</div>
              <div className="text-xs uppercase tracking-[0.2em] text-silver-dim mt-2">Tüm İlçeler</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
