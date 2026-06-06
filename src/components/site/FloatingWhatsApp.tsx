import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/905433372197?text=Merhaba,%20bilgi%20almak%20istiyorum."
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile iletişime geçin"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full animate-pulse-ring" />
      <span className="relative flex items-center justify-center size-14 rounded-full bg-whatsapp shadow-elevated group-hover:scale-110 transition-transform duration-500">
        <MessageCircle className="size-6 text-white" strokeWidth={2} />
      </span>
    </a>
  );
}
