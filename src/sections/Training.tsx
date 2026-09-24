import { GraduationCap, UserRound, Video, ArrowRight, Bot } from "lucide-react";
import Reveal from "../components/Reveal";
import ChecklistForm from "../components/ChecklistForm";

const FORMATS = [
  {
    icon: GraduationCap,
    title: "Корпоративное обучение",
    text: "Программы под задачи вашей команды: QA, производство, ИТ. Адаптируем материал под ваши процессы, продукцию и регуляторный контекст.",
  },
  {
    icon: UserRound,
    title: "Индивидуальное обучение",
    text: "Персональные треки для специалистов: от базовых требований GMP до углублённой валидации и аудиторских компетенций. С обратной связью эксперта.",
  },
  {
    icon: Video,
    title: "Вебинары",
    text: "Регулярные живые вебинары: разбор изменений нормативной базы, сложные кейсы из практики, ответы на вопросы участников.",
  },
];

export default function Training() {
  return (
    <section id="training" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand-blue/15 to-brand-teal/20 blur-2xl" />
            <img
              src="/images/documents.png"
              alt="Протоколы валидации и соглашения по качеству"
              className="relative w-full rounded-[1.75rem] object-cover shadow-2xl shadow-brand-navy/20"
            />
            <a
              href="https://gxpconsulting.getcourse.ru/showcase"
              target="_blank"
              rel="noreferrer"
              className="absolute -bottom-5 left-6 rounded-2xl bg-brand-navy px-5 py-3.5 text-white shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl block"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal">Платформа</p>
              <p className="text-lg font-extrabold">GetCourse</p>
            </a>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-teal">
              Обучение
            </p>
            <a
              href="https://gxpconsulting.getcourse.ru/showcase"
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl transition-colors hover:text-brand-teal"
            >
              Обучение на платформе GetCourse
            </a>
            <p className="mt-5 max-w-xl leading-relaxed text-brand-ink/65">
              Курсы и вебинары для специалистов качества, производства и IT-команд фармкомпаний.
              Записи, материалы и доступ к обновлениям — в удобном личном кабинете.
            </p>
          </Reveal>

          <div className="mt-9 space-y-4">
            {FORMATS.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className="group flex gap-5 rounded-2xl border border-brand-ink/8 bg-brand-mist/50 p-5 transition-all hover:border-brand-teal/30 hover:bg-white hover:shadow-lg hover:shadow-brand-navy/8">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-teal to-brand-blue text-white">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-extrabold text-brand-ink">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-ink/60">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Анонс мастер-класса по AI-агентам */}
          <Reveal delay={300}>
            <div className="mt-8 rounded-2xl border border-brand-teal/30 bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 p-6 shadow-lg shadow-brand-navy/5">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-teal to-brand-blue text-white">
                  <Bot className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-teal">
                    Новинка
                  </p>
                  <h3 className="mt-1 text-xl font-extrabold text-brand-ink">
                    Мастер-класс: AI-агенты для отчётов по аудитам поставщиков
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/65">
                    Практический доступ на платформе GetCourse: как с помощью AI-агентов ускорять подготовку отчётов по аудитам поставщиков, проверять данные и оформлять документы по GMP/GAMP.
                  </p>
                  <a
                    href="https://gxpconsulting.getcourse.ru/showcase"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-teal px-5 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
                  >
                    Перейти к мастер-классу
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Форма для скачивания чек-листа */}
          <Reveal delay={340}>
            <div className="mt-12">
              <ChecklistForm />
            </div>
          </Reveal>

          <Reveal delay={360}>
            <a
              href="https://t.me/gxpexcellence/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition-colors hover:text-brand-teal"
            >
              Узнать расписание и программы в Telegram
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}