const items = ["Çatı Kurulumu", "Ferforje", "Çelik Konstrüksiyon", "Sundurma", "İzolasyon", "Merdiven", "Garaj Kapısı", "Kaynak İşleri"];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-gold/15 bg-black py-6">
      <div className="flex gap-16 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-16 font-display text-3xl sm:text-5xl">
            <span className="text-foreground/30 italic">{t}</span>
            <span className="text-gold">✦</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
    </div>
  );
}
