import { Send, Rss, BellRing, MessagesSquare } from "lucide-react";
import Reveal from "../components/Reveal";

const BENEFITS = [
  { icon: Rss, text: "Разборы изменений нормативной базы простым языком" },
  { icon: BellRing, text: "Анонсы вебинаров и новых курсов на GetCourse" },
  { icon: MessagesSquare, text: "Практические кейсы, чек-листы и ответы на вопросы" },
];

export default function Telegram() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-teal">
              Telegram-канал
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              Подключайтесь к каналу GxP Excellence
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-brand-ink/65">
              Профессиональное сообщество о качестве в фарме: нормативные новости, практика
              валидации и аудита, анонсы обучения. Наведите камеру на QR-код — и вы с нами.
            </p>
          </Reveal>
          <div className="mt-8 space-y-4">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.text} delay={i * 100}>
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-mint text-brand-tealdeep">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-semibold text-brand-ink/75">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <a
              href="https://t.me/gxpexcellence/"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-teal to-brand-blue px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-brand-blue/25 transition-transform hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" />
              t.me/gxpexcellence
            </a>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="relative mx-auto w-fit">
            <div className="absolute -inset-5 rounded-[2.25rem] bg-gradient-to-br from-brand-teal/20 to-brand-blue/20 blur-2xl" />
            <div className="relative rounded-[1.75rem] bg-white p-4 shadow-2xl shadow-brand-navy/15 ring-1 ring-brand-ink/8">
              <img
                src="/images/telegram-qr.png"
                alt="QR-код Telegram-канала GxP Excellence"
                className="w-64 rounded-2xl sm:w-72"
              />
              <p className="mt-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-brand-ink/50">
                Наведите камеру
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
