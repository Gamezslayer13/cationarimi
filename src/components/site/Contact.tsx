import { Phone, Mail, MapPin, MessageCircle, User } from "lucide-react";

export function Contact() {
  return (
    <section id="iletisim" className="relative py-32 bg-gradient-onyx">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16 reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="eyebrow">İletişim</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Projenizi <span className="italic text-gold-gradient">konuşalım.</span>
          </h2>
          <p className="mt-6 text-silver-dim text-lg">
            Bir telefon, bir mesaj uzaklıktayız. Ücretsiz keşif için bugün bize ulaşın.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              { icon: User, label: "Yetkili", value: "Ahmet Altınsoy", href: null },
              { icon: Phone, label: "Telefon", value: "0543 337 21 97", href: "tel:+905433372197" },
              { icon: MessageCircle, label: "WhatsApp", value: "Hemen mesaj gönderin", href: "https://wa.me/905433372197" },
              { icon: Mail, label: "E-posta", value: "binaltinyapi@gmail.com", href: "mailto:binaltinyapi@gmail.com" },
              { icon: MapPin, label: "Adres", value: "Ulubey Mh. 866. Sk. No: 4/1 Altındağ / Ankara", href: "https://maps.google.com/?q=Ulubey+Mahallesi+866.+Sokak+No+4+Altındağ+Ankara" },
            ].map((c, i) => {
              const Icon = c.icon;
              const Wrap = c.href ? "a" : "div";
              return (
                <Wrap
                  key={c.label}
                  {...(c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
                  className="reveal glass-card glass-card-hover rounded-sm p-6 flex items-start gap-5 group"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="size-12 rounded-sm bg-gradient-gold flex items-center justify-center shrink-0 shadow-gold">
                    <Icon className="size-5 text-onyx" strokeWidth={1.6} />
                  </div>
                  <div className="flex-1">
                    <div className="eyebrow text-gold/70 mb-1">{c.label}</div>
                    <div className="font-display text-lg group-hover:text-gold transition-colors">{c.value}</div>
                  </div>
                </Wrap>
              );
            })}
          </div>

          <div className="reveal overflow-hidden rounded-sm border border-gold/30 min-h-[500px]">
            <iframe
              title="Binaltın Yapı konum"
              src="https://www.google.com/maps?q=Ulubey+Mahallesi+866.+Sokak+No+4+Altındağ+Ankara&output=embed"
              loading="lazy"
              className="w-full h-full min-h-[500px] grayscale contrast-125"
              style={{ filter: "grayscale(1) contrast(1.1) brightness(0.7) invert(0.92) hue-rotate(180deg)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
