import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FileText, ArrowRight } from "lucide-react";

export default function HeroChecklistForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setStatus("sending");

    emailjs
      .sendForm(
        "service_shklsc5",
        "template_bbeutab",
        form.current,
        "LojUK33GzjbWcRBRg"
      )
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        (error: any) => {
          console.error("Ошибка отправки:", error?.text || error);
          setStatus("error");
        }
      );
  };

  return (
    <div className="rounded-2xl border-2 border-brand-teal/40 bg-white/95 p-4 shadow-xl shadow-brand-navy/10 backdrop-blur">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-teal to-brand-blue text-white">
          <FileText className="h-4 w-4" />
        </span>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-brand-teal">
            Бесплатный чек-лист
          </p>
          <p className="text-sm font-extrabold leading-tight text-brand-ink">
            ТОП-100 вопросов GMP-инспекторов
          </p>
        </div>
      </div>

      {status === "success" ? (
        <p className="mt-3 text-center text-sm font-semibold text-brand-teal">
          Готово! Проверьте почту — мы отправили чек-лист.
        </p>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="mt-3 space-y-2">
          <input
            type="text"
            name="to_name"
            placeholder="Ваше имя"
            required
            className="w-full rounded-lg border border-brand-ink/15 bg-white px-3 py-2 text-sm focus:border-brand-teal focus:outline-none"
          />
          <input
            type="email"
            name="to_email"
            placeholder="Ваш Email"
            required
            className="w-full rounded-lg border border-brand-ink/15 bg-white px-3 py-2 text-sm focus:border-brand-teal focus:outline-none"
          />
          <input
            type="hidden"
            name="checklist_link"
            value="https://disk.yandex.ru/i/thLI4qzTyOWABw"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-teal to-brand-blue px-4 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {status === "sending" ? "Отправляем..." : "Скачать бесплатно"}
            {status !== "sending" && <ArrowRight className="h-3.5 w-3.5" />}
          </button>
          {status === "error" && (
            <p className="text-center text-xs font-semibold text-red-500">
              Ошибка. Попробуйте ещё раз.
            </p>
          )}
        </form>
      )}
    </div>
  );
}