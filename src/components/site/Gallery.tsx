import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const items = [
  { src: p1, title: "Ferforje Bahçe Kapısı", cat: "Demir İşleri", span: "row-span-2" },
  { src: p2, title: "Endüstriyel Çelik Çatı", cat: "Konstrüksiyon", span: "" },
  { src: p4, title: "Cam Teras Sundurma", cat: "Sundurma", span: "" },
  { src: p3, title: "Asılı Çelik Merdiven", cat: "Merdiven", span: "row-span-2" },
  { src: p5, title: "Argon Kaynak Detayı", cat: "Kaynak", span: "" },
  { src: p6, title: "Modern Garaj Kapısı", cat: "Garaj Kapısı", span: "" },
];

export function Gallery() {
  return (
    <section id="projeler" className="relative py-32 bg-gradient-onyx">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 reveal">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-line" />
              <span className="eyebrow">Projelerimiz</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Çelik ve <span className="italic text-gold-gradient">zarafetin</span> izleri.
            </h2>
          </div>
          <p className="lg:max-w-sm text-silver-dim leading-relaxed">
            Ankara'nın dört bir yanında tamamladığımız işlerin seçkisi. Her biri, dayanıklılığın
            ve detay tutkusunun belgesi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-[260px_260px_260px_260px] gap-4 auto-rows-[260px]">
          {items.map((it, i) => (
            <figure
              key={it.title}
              className={`reveal relative overflow-hidden rounded-sm group cursor-pointer ${it.span}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/40 transition-all duration-700" />
              <figcaption className="absolute bottom-0 inset-x-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                <div className="eyebrow text-gold/80 mb-2">{it.cat}</div>
                <div className="font-display text-2xl text-foreground">{it.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
