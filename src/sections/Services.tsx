import {
  ClipboardList,
  SearchCheck,
  Users,
  FlaskConical,
  FileSignature,
  Award,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "../components/Reveal";

const SERVICES = [
  {
    icon: ClipboardList,
    title: "Разработка и внедрение QMS",
    text: "Построение системы менеджмента качества «под ключ»: от GAP-анализа и архитектуры документации до работающих процедур и обученного персонала.",
  },
  {
    icon: SearchCheck,
    title: "Независимый аудит PQS",
    text: "Объективная оценка фармацевтической системы качества: полнота, эффективность, соответствие GMP. Отчёт с приоритизированными рисками и планом CAPA.",
  },
  {
    icon: Users,
    title: "Аутсорсинг функции качества",
    text: "Внешняя экспертная поддержка QA на регулярной основе: ведение процессов СМК, рассмотрение отклонений и изменений, выпуск продукции.",
  },
  {
    icon: FlaskConical,
    title: "Валидация и квалификация",
    text: "Валидация процессов и методик, квалификация оборудования и чистых помещений, валидация компьютеризированных систем, маппинг климатических камер.",
  },
  {
    icon: FileSignature,
    title: "Соглашения по качеству",
    text: "Разработка и экспертиза соглашений по качеству с поставщиками, подрядчиками и контрактными площадками. Чёткое разграничение ответственности сторон.",
  },
  {
    icon: Award,
    title: "Подготовка к инспекциям",
    text: "Мок-инспекции с разбором «горячих точек», тренинг персонала по работе с инспектором, сопровождение во время инспекции и ответы на замечания.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-brand-mist/70 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-teal">
                Услуги
              </p>
              <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
                Консалтинг и аутсорсинг по системе качества
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-brand-ink/60">
              Берём на себя качество как процесс: проектируем, внедряем, проверяем и
              сопровождаем — точечно или «под ключ».
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <article className="group relative h-full overflow-hidden rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-brand-ink/6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-navy/10">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-brand-teal/12 to-brand-blue/12 transition-transform duration-500 group-hover:scale-[2.2]" />
                <span className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mist text-brand-tealdeep transition-colors group-hover:bg-gradient-to-br group-hover:from-brand-teal group-hover:to-brand-blue group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="relative flex items-start justify-between gap-2 text-lg font-extrabold text-brand-ink">
                  {s.title}
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-brand-teal opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-brand-ink/65">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
