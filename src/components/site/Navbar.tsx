import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#neden-biz", label: "Neden Biz" },
  { href: "#projeler", label: "Projeler" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#sss", label: "SSS" },
  { href: "#iletisim", label: "İletişim" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-onyx/80 backdrop-blur-xl border-b border-gold/15"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 rounded-sm bg-gradient-gold flex items-center justify-center shadow-gold">
            <span className="font-display text-xl font-semibold text-onyx">B</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-xl tracking-wide text-silver-gradient">Binaltın</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold/80">Yapı</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-silver-dim hover:text-gold transition-colors duration-500 relative after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-gradient-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+905433372197"
          className="hidden lg:inline-flex items-center gap-2 btn-outline-gold rounded-sm px-5 py-2.5 text-sm font-medium"
        >
          <Phone className="size-4" />
          0543 337 21 97
        </a>

        <button
          aria-label="Menü"
          className="lg:hidden text-gold-soft p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-onyx-elevated/95 backdrop-blur-xl border-t border-gold/15 animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-silver-dim hover:text-gold transition py-2 border-b border-border/40"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+905433372197"
              className="btn-gold rounded-sm px-5 py-3 text-sm font-medium text-center mt-2"
            >
              0543 337 21 97
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
