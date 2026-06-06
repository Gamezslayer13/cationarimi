import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-onyx transition-opacity duration-700 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="h-12 w-12 rounded-sm bg-gradient-gold flex items-center justify-center shadow-gold">
          <span className="font-display text-2xl font-semibold text-onyx">B</span>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-display text-2xl text-silver-gradient">Binaltın</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold/80">Yapı</span>
        </div>
      </div>
      <div className="w-48 h-px bg-border overflow-hidden">
        <div className="h-full bg-gradient-gold animate-loader-bar" />
      </div>
    </div>
  );
}
