import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export function Gallery() {
  return (
    <section id="projeler" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Editorial header — asymmetric */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 lg:col-span-7 reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-line" />
              <span className="eyebrow">Selected Works · 001 — 006</span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.9] tracking-tight">
              <span className="block">Çelik üzerinde</span>
              <span className="block italic font-light text-silver-gradient pl-12 sm:pl-24">
                yazılmış
              </span>
              <span className="block shimmer-text font-medium">hikayeler.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-10 self-end reveal">
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold/70 mb-3">Vol. 01</div>
            <p className="text-sm text-silver-dim leading-relaxed">
              Atölyemizden çıkan altı imza projeden seçkiler — her biri Ankara'nın silüetinde
              kalıcı bir iz.
            </p>
          </div>
        </div>

        {/* Editorial broken grid */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {/* Tall hero left */}
          <figure className="reveal col-span-12 md:col-span-7 lg:col-span-5 relative group overflow-hidden rounded-sm h-[420px] md:h-[640px]">
            <img src={p1} alt="Ferforje bahçe kapısı detayı" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/10 to-transparent" />
            <figcaption className="absolute bottom-0 inset-x-0 p-8">
              <div className="eyebrow text-gold mb-2">001 · Demir İşleri</div>
              <div className="font-display text-3xl lg:text-4xl">Ferforje Bahçe Kapısı</div>
              <div className="text-sm text-silver-dim mt-2">Çankaya · 2024</div>
            </figcaption>
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/40 transition-all duration-700" />
          </figure>

          {/* Right column — stacked */}
          <div className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-col gap-4 lg:gap-6">
            <figure className="reveal relative group overflow-hidden rounded-sm h-[300px]">
              <img src={p2} alt="Endüstriyel çelik çatı" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-tr from-onyx/90 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 inset-x-0 p-6">
                <div className="eyebrow text-gold/80 mb-1">002</div>
                <div className="font-display text-2xl">Çelik Çatı Sistemi</div>
              </figcaption>
            </figure>
            <figure className="reveal relative group overflow-hidden rounded-sm h-[320px]">
              <img src={p5} alt="Argon kaynak detayı" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/20 to-transparent" />
              <figcaption className="absolute bottom-0 inset-x-0 p-6">
                <div className="eyebrow text-gold/80 mb-1">003</div>
                <div className="font-display text-2xl">Kaynak Detayı</div>
              </figcaption>
            </figure>
          </div>

          {/* Floating type block */}
          <div className="reveal hidden lg:flex col-span-3 flex-col justify-between glass-card rounded-sm p-8 h-[640px]">
            <div>
              <div className="eyebrow text-gold mb-4">Index</div>
              <ol className="space-y-3 text-sm text-silver-dim">
                {["Ferforje Kapı", "Çelik Çatı", "Kaynak", "Asılı Merdiven", "Sundurma", "Garaj"].map((t, i) => (
                  <li key={t} className="flex gap-4 group cursor-default">
                    <span className="font-display text-gold/50 tabular-nums">0{i + 1}</span>
                    <span className="group-hover:text-gold transition">{t}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <div className="font-display text-5xl text-gold-gradient">1200+</div>
              <div className="text-xs uppercase tracking-[0.3em] text-silver-dim mt-2">
                Tamamlanan Proje
              </div>
            </div>
          </div>

          {/* Offset second row */}
          <figure className="reveal col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-2 relative group overflow-hidden rounded-sm h-[360px] lg:-mt-16">
            <img src={p3} alt="Asılı çelik merdiven" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-br from-onyx/80 via-transparent to-onyx/40" />
            <figcaption className="absolute bottom-0 inset-x-0 p-6">
              <div className="eyebrow text-gold/80 mb-1">004 · Merdiven</div>
              <div className="font-display text-2xl">Asılı Çelik Merdiven</div>
            </figcaption>
          </figure>

          <figure className="reveal col-span-12 md:col-span-6 lg:col-span-5 relative group overflow-hidden rounded-sm h-[360px]">
            <img src={p4} alt="Cam teras sundurma" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/20 to-transparent" />
            <figcaption className="absolute bottom-0 inset-x-0 p-6">
              <div className="eyebrow text-gold/80 mb-1">005 · Sundurma</div>
              <div className="font-display text-2xl">Cam Teras Sundurma</div>
            </figcaption>
          </figure>

          <figure className="reveal col-span-12 lg:col-span-9 lg:col-start-4 relative group overflow-hidden rounded-sm h-[300px] lg:h-[360px]">
            <img src={p6} alt="Modern garaj kapısı" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-onyx/90 via-onyx/30 to-transparent" />
            <figcaption className="absolute top-0 left-0 p-8 max-w-md">
              <div className="eyebrow text-gold mb-2">006 · Garaj</div>
              <div className="font-display text-3xl lg:text-4xl">Premium Motorlu Kapı</div>
              <p className="mt-3 text-sm text-silver-dim">
                Sessiz motor, ferforje desen, akıllı kontrol — prestijli girişlerin son halkası.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
