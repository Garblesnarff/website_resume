import { useState } from 'react';
import { Check, Copy, Github, Linkedin, Youtube } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import XLogo from '../components/icons/XLogo';
import { CONTACT } from '../config';

const field =
  'mt-2 w-full rounded-[3px] border border-birch-line bg-white/70 px-4 py-3 text-ink outline-none transition-colors placeholder:text-slate/60 focus:border-spruce focus:ring-2 focus:ring-spruce/25';

const Contact = () => {
  const [form, setForm] = useState({ name: '', subject: '', message: '' });
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${form.message}\n\n${form.name}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <PageHeader
        title="Contact me"
        intro="Interested in discussing AI alignment, behavior analysis, or potential collaboration? I'd love to hear from you."
      />

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-5xl text-ink">Email</h2>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-5 block break-all font-display text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight text-spruce underline decoration-spruce/30 underline-offset-[6px] hover:decoration-spruce"
            >
              {CONTACT.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="mt-4 inline-flex items-center gap-2 font-ui text-lg font-bold text-slate hover:text-ink"
            >
              {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
              {copied ? 'Copied' : 'Copy address'}
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? 'Email address copied' : ''}
            </span>

            <p className="mt-10 max-w-sm text-slate">
              Please allow 1-2 business days for a response. I&rsquo;m most interested in discussions related to AI
              safety, alignment research, and potential collaboration opportunities.
            </p>

            <h2 className="mt-14 text-4xl text-ink">Elsewhere</h2>
            <ul className="mt-4 divide-y divide-birch-line border-y border-birch-line">
              {[
                { href: CONTACT.github, label: 'GitHub', handle: 'Garblesnarff', icon: <Github size={20} aria-hidden="true" /> },
                { href: CONTACT.linkedin, label: 'LinkedIn', handle: 'rob-hanson-ai', icon: <Linkedin size={20} aria-hidden="true" /> },
                { href: CONTACT.x, label: 'X', handle: '@PrintedPathways', icon: <XLogo size={18} /> },
                { href: CONTACT.youtube, label: 'YouTube', handle: '@Sinister_Serials', icon: <Youtube size={20} aria-hidden="true" /> },
              ].map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 py-3.5 text-ink hover:text-spruce">
                    {s.icon}
                    <span className="font-ui text-lg font-bold">{s.label}</span>
                    <span className="ml-auto text-slate">{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="rounded-[4px] bg-birch-shade p-6 sm:p-10">
              <h2 className="text-5xl text-ink">Write a message</h2>
              <p className="mt-3 text-slate">This opens the message in your email app, ready to send.</p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <label className="block font-ui text-lg font-bold text-ink">
                  Your name
                  <input name="name" value={form.name} onChange={onChange} required autoComplete="name" className={`${field} font-serif text-base font-normal`} />
                </label>
                <label className="block font-ui text-lg font-bold text-ink">
                  Subject
                  <input name="subject" value={form.subject} onChange={onChange} required className={`${field} font-serif text-base font-normal`} />
                </label>
              </div>
              <label className="mt-6 block font-ui text-lg font-bold text-ink">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                  rows={7}
                  className={`${field} resize-y font-serif text-base font-normal`}
                />
              </label>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <button type="submit" className="btn btn-ink">
                  Open in email app
                </button>
                <p aria-live="polite" className="text-[0.95rem] text-slate">
                  {opened && (
                    <>
                      No email app opened? Send it to{' '}
                      <a href={`mailto:${CONTACT.email}`} className="text-link">
                        {CONTACT.email}
                      </a>
                      .
                    </>
                  )}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
