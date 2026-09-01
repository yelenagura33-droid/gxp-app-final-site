import { ArrowRight, Send, ShieldCheck, FileCheck2 } from "lucide-react";
import Reveal from "../components/Reveal";

const CHIPS = ["GMP EAEU", "EudraLex Vol. 4", "ICH", "WHO", "PIC/S", "GAMP 5"];

export default function Hero() {
  return (
    <section id="top" className="hero-mesh relative overflow-hidden pt-28 lg:pt-36">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
        <div>
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-teal/25 bg-white/70 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-tealdeep">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
              Pharma Consulting · QMS · GMP
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-ink sm:text-5xl lg:text-[3.6rem]">
              Система качества, которая{" "}
              <span className="text-gradient">выдержит любую инспекцию</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-ink/70">
              Консалтинг и аутсорсинг по разработке и внедрению систем менеджмента качества
              на фармацевтическом производстве. Независимый аудит фармацевтической системы
              качества — для производств, IT-компаний и фармацевтических складов.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://t.me/gxpexcellence/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-teal to-brand-blue px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-brand-blue/25 transition-transform hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4" />
                Обсудить задачу в Telegram
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-brand-ink/15 bg-white/80 px-7 py-3.5 text-sm font-bold text-brand-ink transition-colors hover:border-brand-teal hover:text-brand-teal"
              >
                Смотреть услуги
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-2">
              {CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-brand-bluedeep ring-1 ring-brand-blue/15"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-teal/25 to-brand-blue/25 blur-2xl" />
            <img
              src="/images/hero-lab.png"
              alt="Контроль качества на фармацевтическом производстве"
              className="relative w-full rounded-[1.75rem] object-cover shadow-2xl shadow-brand-navy/25"
            />
            <div className="absolute -left-3 bottom-8 hidden rounded-2xl bg-white/95 p-4 shadow-xl shadow-brand-navy/15 backdrop-blur sm:block lg:-left-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-mint text-brand-tealdeep">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-brand-ink">Независимый аудит PQS</p>
                  <p className="text-xs text-brand-ink/60">GAP-анализ · CAPA · готовность к инспекции</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-3 top-8 hidden rounded-2xl bg-white/95 p-4 shadow-xl shadow-brand-navy/15 backdrop-blur sm:block lg:-right-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-sky text-brand-blue">
                  <FileCheck2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-brand-ink">Валидация · GAMP 5</p>
                  <p className="text-xs text-brand-ink/60">CSV для компьютеризированных систем</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
