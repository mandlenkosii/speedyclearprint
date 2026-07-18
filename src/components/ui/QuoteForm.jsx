import { useState } from "react";

function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Quote Request from ${form.name}`
    );

    const body = encodeURIComponent(
`Name: ${form.name}

Email: ${form.email}

Message:
${form.message}`
    );

    window.location.href =
      `mailto:quotes@speedyclearprint.co.za?subject=${subject}&body=${body}`;

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-3xl bg-white p-8 shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-[var(--border)] p-4 outline-none focus:border-[var(--primary)]"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-[var(--border)] p-4 outline-none focus:border-[var(--primary)]"
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Tell us about your project..."
          value={form.message}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-[var(--border)] p-4 outline-none focus:border-[var(--primary)]"
        />

        <button
          className="w-full rounded-xl bg-[var(--primary)] py-4 font-semibold text-white transition hover:opacity-90"
        >
          Request Quote
        </button>
      </form>

      {submitted && (
        <p className="mt-6 text-center font-medium text-green-600">
          Thank you! Your email client should now open.
        </p>
      )}
    </>
  );
}

export default QuoteForm;