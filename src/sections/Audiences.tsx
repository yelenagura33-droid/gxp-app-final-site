import { Factory, MonitorSmartphone, Warehouse } from "lucide-react";
import Reveal from "../components/Reveal";

const AUDIENCES = [
  {
    icon: Factory,
    title: "Фармпроизводствам и лабораториям",
    text: "Построение системы менеджмента качества с нуля или развитие действующей PQS: процессы, документация, культура качества, подготовка к инспекциям регуляторов.",
    points: ["Разработка и внедрение QMS", "Аудит PQS и план CAPA", "Мок-инспекции"],
  },
  {
    icon: MonitorSmartphone,
    title: "IT-компаниям, работающим с фармой",
    text: "Помогаем говорить с заказчиком на языке GxP: валидация компьютеризированных систем по GAMP 5, требования Annex 11 и 21 CFR Part 11, целостность данных.",
    points: ["CSV / CSA по GAMP 5", "Data Integrity (ALCOA+)", "Сопровождение валидации ПО"],
  },
  {
    icon: Warehouse,
    title: "Фармскладам и дистрибьюторам",
    text: "Соответствие требованиям GDP и правил хранения: квалификация помещений, температурный маппинг, управление отклонениями и субстантивный документооборот.",
    points: ["GDP и холодовая цепь", "Температурный маппинг", "Соглашения по качеству"],
  },
];

export default function Audiences() {
  return (
    <section id="audiences" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-teal">
            Для кого
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Экспертиза, заточенная под вашу роль в фармцепочке
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {AUDIENCES.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <article className="group flex h-full flex-col rounded-[1.5rem] border border-brand-ink/8 bg-brand-mist/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-teal/30 hover:bg-white hover:shadow-xl hover:shadow-brand-navy/8">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-teal to-brand-blue text-white shadow-lg shadow-brand-blue/20">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-extrabold leading-snug text-brand-ink">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-ink/65">{item.text}</p>
                <ul className="mt-5 space-y-2 border-t border-brand-ink/8 pt-5">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm font-semibold text-brand-bluedeep">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
