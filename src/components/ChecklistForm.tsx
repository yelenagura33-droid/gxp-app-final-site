import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ChecklistForm() {
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
    <form
      ref={form}
      onSubmit={sendEmail}
      className="mx-auto max-w-xl space-y-4 rounded-2xl border border-brand-ink/10 bg-white p-6 shadow-lg"
    >
      <h3 className="text-xl font-extrabold text-brand-ink">
        Скачать чек-лист бесплатно
      </h3>
      <p className="text-sm text-brand-ink/60">
        «ТОП-100 вопросов для GMP-инспекции (ЕАЭС, EMA, PIC/S)» — получите PDF на почту.
      </p>

      <input
        type="text"
        name="to_name"
        placeholder="Ваше имя"
        required
        className="w-full rounded-lg border border-brand-ink/15 px-4 py-3 text-sm focus:border-brand-teal focus:outline-none"
      />
      <input
        type="email"
        name="to_email"
        placeholder="Ваш Email"
        required
        className="w-full rounded-lg border border-brand-ink/15 px-4 py-3 text-sm focus:border-brand-teal focus:outline-none"
      />

      <input
        type="hidden"
        name="checklist_link"
        value="https://disk.yandex.ru/i/thLI4qzTyOWABw"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-gradient-to-r from-brand-teal to-brand-blue px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {status === "sending" ? "Отправляем..." : "Скачать прямо сейчас"}
      </button>

      {status === "success" && (
        <p className="text-center text-sm font-semibold text-brand-teal">
          Готово! Проверьте почту — мы отправили чек-лист.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm font-semibold text-red-500">
          Ошибка отправки. Попробуйте ещё раз.
        </p>
      )}
    </form>
  );
}