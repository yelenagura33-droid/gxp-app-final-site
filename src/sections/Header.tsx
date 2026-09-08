import { useEffect, useState } from "react";
import { Send, Menu, X } from "lucide-react";

const NAV = [
  { href: "#audiences", label: "Для кого" },
  { href: "#services", label: "Услуги" },
  { href: "#regulations", label: "Нормативная база" },
  { href: "#training", label: "Обучение" },
  { href: "#templates", label: "Шаблоны" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_1px_0_rgba(18,49,79,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/images/logo.jpg"
            alt="GxP Excellence"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-brand-teal/30"
          />
          <span className="leading-tight">
            <span className="block text-[17px] font-extrabold tracking-tight text-brand-ink">
              GxP <span className="text-brand-teal">Excellence</span>
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Pharma Consulting · QMS · GMP
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-brand-ink/70 transition-colors hover:text-brand-teal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="mailto:info@gxpexcellence.ru"
            className="text-sm font-semibold text-brand-ink/70 transition-colors hover:text-brand-teal"
          >
            info@gxpexcellence.ru
          </a>
            <a
            href="https://t.me/gxpexcellence/"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand-teal to-brand-blue px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-blue/20 transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <Send className="h-4 w-4" />
            Telegram
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 text-brand-ink lg:hidden"
            aria-label="Меню"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-brand-ink/10 bg-white/95 px-5 py-4 backdrop-blur-md lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-semibold text-brand-ink/80"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
