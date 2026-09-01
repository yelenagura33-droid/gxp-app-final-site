import { Phone, MapPin, Send, BadgeCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacts" className="navy-mesh text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.jpg"
                alt="GxP Excellence"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-teal/40"
              />
              <div>
                <p className="text-lg font-extrabold tracking-tight">
                  GxP <span className="text-brand-teal">Excellence</span>
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                  Pharma Consulting · QMS · GMP
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Консалтинг и аутсорсинг по системам менеджмента качества, независимый аудит PQS,
              обучение и библиотека выверенных шаблонов для фармацевтической отрасли.
            </p>
            <a
              href="https://t.me/gxpexcellence/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-teal/40 px-5 py-2.5 text-sm font-bold text-brand-teal transition-colors hover:bg-brand-teal hover:text-brand-navy"
            >
              <Send className="h-4 w-4" />
              t.me/gxpexcellence
            </a>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-teal">Контакты</p>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href="tel:+79165464400"
                  className="flex items-center gap-3 text-white/80 transition-colors hover:text-brand-teal"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-teal" />
                  +7 (916) 546-44-00
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                <span>
                  Москва, ул. Новодмитровская,
                  <br />
                  д. 2, к. 6
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-teal">Навигация</p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["#services", "Услуги"],
                ["#regulations", "Нормативная база"],
                ["#training", "Обучение на GetCourse"],
                ["#templates", "Библиотека шаблонов"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-white/70 transition-colors hover:text-brand-teal">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/45 sm:flex-row sm:items-center">
          <p className="flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-brand-teal/70" />
            Самозанятый · ИНН 711613338893
          </p>
          <p>© {new Date().getFullYear()} GxP Excellence. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
