import Reveal from "../components/Reveal";

const REGULATIONS = [
  { code: "GMP EAEU", desc: "Правила надлежащей производственной практики Евразийского экономического союза" },
  { code: "EudraLex Vol. 4", desc: "EU GMP: Part I–III, Annexes 1, 11, 15 и другие приложения" },
  { code: "ICH", desc: "Q7, Q8, Q9, Q10 — качество, риск-менеджмент, фармацевтическая система качества" },
  { code: "WHO", desc: "Technical Report Series — международные стандарты GMP и квалификации" },
  { code: "PIC/S", desc: "Руководства PIC/S: GMP, Annex 1, рекомендации по инспектированию" },
  { code: "GAMP 5", desc: "ISPE GAMP 5 — риск-ориентированная валидация компьютеризированных систем" },
  { code: "Annex 11 / 21 CFR Part 11", desc: "Электронные записи и подписи, целостность данных" },
  { code: "GDP", desc: "Надлежащая дистрибьюторская практика, холодовая цепь, хранение и транспортировка" },
  { code: "ISO 9001 / 13485", desc: "СМК по ISO — там, где это уместно и требуется заказчику" },
];

export default function Regulations() {
  return (
    <section id="regulations" className="navy-mesh relative overflow-hidden py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1fr_0.85fr] lg:px-8">
        <div>
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-teal">
              Нормативная база
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Работаем в русле международных и национальных требований
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-white/65">
              Каждое решение — от структуры QMS до формулировки в протоколе валидации —
              опирается на актуальные редакции регуляторных документов. Мы отслеживаем
              изменения и переводим их в практические действия для вашего производства.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {REGULATIONS.map((r, i) => (
              <Reveal key={r.code} delay={(i % 2) * 90}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition-colors hover:border-brand-teal/50 hover:bg-white/[0.09]">
                  <p className="text-sm font-extrabold tracking-wide text-brand-teal">{r.code}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={150} className="relative hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-brand-teal/20 blur-3xl" />
            <img
              src="/images/cleanroom.png"
              alt="Чистое помещение фармацевтического производства"
              className="relative w-full rounded-[1.75rem] object-cover shadow-2xl shadow-black/40 ring-1 ring-white/15"
            />
            <div className="absolute bottom-6 left-6 rounded-2xl bg-brand-navy/80 px-5 py-4 backdrop-blur">
              <p className="text-2xl font-extrabold text-white">100%</p>
              <p className="text-xs text-white/60">опора на действующие редакции нормативных документов</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
