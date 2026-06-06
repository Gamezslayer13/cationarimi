import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-black pt-20 pb-10 border-t border-gold/20">
      <div className="absolute inset-x-0 top-0 gold-divider" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-sm bg-gradient-gold flex items-center justify-center shadow-gold">
                <span className="font-display text-xl font-semibold text-onyx">B</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-xl text-silver-gradient">Binaltın Yapı</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold/80">Çatı & Demir İşleri</span>
              </div>
            </div>
            <p className="mt-6 max-w-md text-silver-dim leading-relaxed">
              Ankara'da 15 yılı aşkın deneyimle çatı ve demir işlerinde altın standardı temsil ediyoruz.
              Her detayda ustalık, her teslimde güven.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="Instagram" className="size-10 rounded-sm border border-gold/30 hover:bg-gold/10 hover:border-gold transition-all flex items-center justify-center text-gold">
                <Instagram className="size-4" />
              </a>
              <a href="#" aria-label="Facebook" className="size-10 rounded-sm border border-gold/30 hover:bg-gold/10 hover:border-gold transition-all flex items-center justify-center text-gold">
                <Facebook className="size-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="eyebrow mb-5">Navigasyon</div>
            <ul className="space-y-3 text-sm">
              {[
                ["Hizmetler", "#hizmetler"],
                ["Neden Biz", "#neden-biz"],
                ["Projeler", "#projeler"],
                ["Hakkımızda", "#hakkimizda"],
                ["SSS", "#sss"],
                ["İletişim", "#iletisim"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="text-silver-dim hover:text-gold transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="eyebrow mb-5">İletişim</div>
            <ul className="space-y-4 text-sm text-silver-dim">
              <li className="flex gap-3"><Phone className="size-4 text-gold shrink-0 mt-0.5" /><a href="tel:+905433372197" className="hover:text-gold transition">0543 337 21 97</a></li>
              <li className="flex gap-3"><Mail className="size-4 text-gold shrink-0 mt-0.5" /><a href="mailto:binaltinyapi@gmail.com" className="hover:text-gold transition">binaltinyapi@gmail.com</a></li>
              <li className="flex gap-3"><MapPin className="size-4 text-gold shrink-0 mt-0.5" /><span>Ulubey Mh. 866. Sk. No: 4/1<br />Altındağ / Ankara</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-silver-dim">
          <div>© {new Date().getFullYear()} Binaltın Yapı. Tüm hakları saklıdır.</div>
          <div className="tracking-[0.2em] uppercase">Ankara · Altındağ · Türkiye</div>
        </div>
      </div>
    </footer>
  );
}
