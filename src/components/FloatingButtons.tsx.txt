import { MessageCircle, Send } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Кнопка WhatsApp */}
      <a
        href="https://wa.me/79031520699"
        target="_blank"
        rel="noreferrer"
        aria-label="Написать в WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Кнопка Telegram */}
      <a
        href="https://t.me/gxpexcellence"
        target="_blank"
        rel="noreferrer"
        aria-label="Написать в Telegram"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-lg transition-transform hover:scale-110"
      >
        <Send className="h-6 w-6" />
      </a>
    </div>
  );
}