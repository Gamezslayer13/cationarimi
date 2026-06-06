import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Hizmet bölgeniz neresi?",
    a: "Ankara'nın tüm ilçelerine hizmet veriyoruz. Altındağ merkezli atölyemizden tüm şehre aynı gün ulaşıyoruz.",
  },
  {
    q: "Keşif ve fiyat teklifi ücretli mi?",
    a: "Hayır. Keşif ve fiyat teklifi tamamen ücretsizdir. Talebinizden sonra 24 saat içinde size dönüş yapıyoruz.",
  },
  {
    q: "İşçiliğinizde garanti veriyor musunuz?",
    a: "Tüm işlerimiz, hizmet kalemine göre 2 ila 10 yıl arasında işçilik garantisi kapsamındadır. Detaylar sözleşmede yer alır.",
  },
  {
    q: "Acil çatı tamiratlarına aynı gün geliyor musunuz?",
    a: "Evet. Yağmur, kar veya hasar durumlarında acil müdahale ekibimiz aynı gün adresinizdedir.",
  },
  {
    q: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    a: "Nakit, havale/EFT ve büyük projelerde kademeli ödeme planları sunuyoruz.",
  },
  {
    q: "Sadece çatı mı yapıyorsunuz?",
    a: "Hayır. Çatı işlerinin yanı sıra demir doğrama, çelik konstrüksiyon, korkuluk, merdiven, sundurma, izolasyon ve özel üretim demir işleri yapıyoruz.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="sss" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="eyebrow">Sıkça Sorulan Sorular</span>
            <span className="gold-line" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Aklınızdaki <span className="italic text-gold-gradient">sorular.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`reveal rounded-sm border transition-all duration-500 ${
                  isOpen ? "border-gold/50 bg-onyx-elevated/60" : "border-border bg-card/30"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 p-6 text-left"
                >
                  <span className={`font-display text-lg sm:text-xl transition-colors ${isOpen ? "text-gold" : "text-foreground"}`}>
                    {f.q}
                  </span>
                  <Plus
                    className={`size-5 shrink-0 text-gold transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-silver-dim leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
