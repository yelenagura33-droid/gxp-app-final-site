import { FileCheck2, Send } from "lucide-react";
import Reveal from "../components/Reveal";

const TEMPLATES = [
  "Протоколы и отчёты валидации процессов",
  "Соглашения по качеству (quality agreements)",
  "Мастер-план валидации (VMP)",
  "URS и спецификации требований",
  "Протоколы температурного маппинга",
  "Оценка рисков (FMEA, риск-реестры)",
  "Стандартные операционные процедуры (СОП)",
  "Чек-листы самоинспекций и аудитов",
  "Шаблоны для CSV / GAMP 5",
];

export default function Templates() {
  return (
    <section id="templates" className="bg-brand-mist/70 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-navy via-brand-bluedeep to-brand-navydeep text-white shadow-2xl shadow-brand-navy/30">
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:p-16">
            <div>
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-teal">
                  Библиотека шаблонов
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Выверенные шаблоны документов — вместо чистого листа
                </h2>
                <p className="mt-5 max-w-lg leading-relaxed text-white/65">
                  Доступ к библиотеке проверенных на практике шаблонов: документы уже прошли
                  аудиты и инспекции, экономят недели работы и снижают риск замечаний.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <a
                  href="https://t.me/gxpexcellence/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-ink transition-transform hover:-translate-y-0.5"
                >
                  <Send className="h-4 w-4 text-brand-blue" />
                  Запросить каталог шаблонов
                </a>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <ul className="grid gap-2.5 sm:grid-cols-1">
                {TEMPLATES.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white/85 backdrop-blur transition-colors hover:border-brand-teal/40"
                  >
                    <FileCheck2 className="h-4 w-4 shrink-0 text-brand-teal" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
