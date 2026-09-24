import { useEffect, useState } from "react";
import { GraduationCap, UserRound, Video, ArrowRight, Bot, Clock, FileCheck, Zap, Users } from "lucide-react";
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

/** Компонент таймера обратного отсчёта */
function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState(targetDate.getTime() - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate.getTime() - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft <= 0) {
    return (
      <span className="text-sm font-bold text-brand-teal">
        Мастер-класс уже доступен!
      </span>
    );
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="flex items-center gap-2 text-sm font-bold text-brand-ink">
      <span className="rounded-md bg-white/80 px-2 py-1 shadow-sm">{days}д</span>
      <span className="rounded-md bg-white/80 px-2 py-1 shadow-sm">{hours}ч</span>
      <span className="rounded-md bg-white/80 px-2 py-1 shadow-sm">{minutes}м</span>
      <span className="rounded-md bg-white/80 px-2 py-1 shadow-sm">{seconds}с</span>
    </div>
  );
}

export default function Training() {
  // Дата и время начала мастер-класса (11 октября 2026, 12:00)
  const masterclassDate = new Date("2026-10-11T12:00:00");

  const METRICS = [
    { icon: Clock, value: "41 ч → 7 ч", label: "на подготовку отчёта" },
    { icon: FileCheck, value: "78% → 97%", label: "выявление несоответствий" },
    { icon: Zap, value: "−77%", label: "ошибок человеческого фактора" },
    { icon: Users, value: "85%", label: "рутины — в автоматизацию" },
  ];

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

          {/* Анонс мастер-класса с таймером и цифрами */}
          <Reveal delay={300}>
            <div className="mt-10 rounded-3xl border-2 border-brand-teal/40 bg-gradient-to-br from-brand-teal/10 via-white to-brand-blue/10 p-6 shadow-xl shadow-brand-navy/10">
              {/* Бейдж */}
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-teal to-brand-blue text-white">
                  <Bot className="h-5 w-5" />
                </span>
                <div>
                  <span className="inline-block rounded-full bg-brand-teal px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Онлайн-мастер-класс
                  </span>
                </div>
              </div>

              {/* Заголовок */}
              <h3 className="mt-4 text-xl font-extrabold leading-tight text-brand-ink sm:text-2xl">
                От блокнота к дашборду: ИИ-ассистенты в аудите поставщиков стерильных лекарственных препаратов
              </h3>

              {/* Цифры */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                {METRICS.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl bg-white/80 p-3 shadow-sm"
                  >
                    <div className="flex items-center gap-1.5 text-brand-teal">
                      <m.icon className="h-3.5 w-3.5" />
                      <span className="text-sm font-extrabold">{m.value}</span>
                    </div>
                    <p className="mt-1 text-[11px] leading-snug text-brand-ink/60">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Что внутри */}
              <div className="mt-5 space-y-2 text-sm leading-relaxed text-brand-ink/70">
                <p>
                  <span className="font-bold text-brand-ink">Теория:</span> Приложение 22 GMP (EU) об ИИ, специфика аудитов в чистых помещениях класса А/В, обзор инструментов (Copilot, Speech Service, Document Analyzer).
                </p>
                <p>
                  <span className="font-bold text-brand-ink">Практика:</span> живая демонстрация — от оцифровки полевых заметок до интерактивного дашборда отчёта.
                </p>
              </div>

              {/* Таймер */}
              <div className="mt-5 flex flex-wrap items-center gap-3 rounded-xl bg-brand-navy px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                  До старта:
                </span>
                <CountdownTimer targetDate={masterclassDate} />
              </div>

              {/* Кнопка */}
              <a
                href="https://gxpconsulting.getcourse.ru/showcase"
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-teal to-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-blue/20 transition-transform hover:-translate-y-0.5"
              >
                Перейти к мастер-классу
                <ArrowRight className="h-4 w-4" />
              </a>
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