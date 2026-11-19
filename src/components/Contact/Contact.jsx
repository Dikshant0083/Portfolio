import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight, FiCheck, FiCopy, FiSend } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import { profile } from "../../constants";
import { Reveal } from "../ui/Reveal";
import { EASE } from "../ui/motion";

const CONTACT_EMAIL = profile.email;

const contactMethods = [
  { title: "WhatsApp", value: profile.phone, href: profile.whatsapp, icon: FaWhatsapp },
  { title: "LinkedIn", value: "in/dikshantchoudhary", href: profile.linkedin, icon: FaLinkedinIn },
  { title: "GitHub", value: "Dikshant0083", href: profile.github, icon: FaGithub },
];

const toastOptions = {
  position: "top-right",
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

const buildMailtoLink = ({ name, email, subject, message }) => {
  const mailSubject = subject?.trim() || "Portfolio Contact";
  const mailBody = [`Name: ${name || ""}`, `Email: ${email || ""}`, "", message || ""].join("\n");
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
};

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="group mt-8 flex w-full items-center justify-between gap-4 rounded-2xl border border-line bg-night/60 px-5 py-4 text-left transition-colors hover:border-violet/60"
    >
      <span className="min-w-0">
        <span className="block text-sm text-mute">Email me at</span>
        <span className="block truncate font-display text-lg font-semibold tracking-tight sm:text-xl">
          {CONTACT_EMAIL}
        </span>
      </span>
      <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-violet text-white">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? "done" : "copy"}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {copied ? <FiCheck size={18} /> : <FiCopy size={18} />}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied" : "Copy email address"}
      </span>
    </button>
  );
};

const Contact = () => {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isSending) return;

    const formData = new FormData(form.current);
    const get = (key) => formData.get(key)?.toString().trim() || "";
    const payload = {
      name: get("user_name"),
      email: get("user_email"),
      subject: get("subject"),
      message: get("message"),
    };

    // Honeypot: real visitors never fill this hidden field, so treat it as sent and stop.
    if (get("website")) {
      form.current.reset();
      return;
    }

    // Form not set up yet: hand over to the visitor's email app so the message isn't lost.
    if (!profile.web3formsAccessKey) {
      toast.info("Opening your email app to send the message.", { ...toastOptions, autoClose: 3500 });
      window.location.href = buildMailtoLink(payload);
      return;
    }

    setIsSending(true);
    let result = null;
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: profile.web3formsAccessKey,
          from_name: "Portfolio contact form",
          subject: `Portfolio: ${payload.subject}`,
          name: payload.name,
          email: payload.email,
          replyto: payload.email,
          message: payload.message,
        }),
      });
      result = await response.json().catch(() => null);
    } catch (error) {
      console.error("Contact request failed:", error);
    }
    setIsSending(false);

    if (result?.success) {
      form.current.reset();
      toast.success("Message sent. I'll reply by email soon.", { ...toastOptions, autoClose: 3500 });
    } else {
      console.error("Web3Forms error:", result?.message);
      toast.info("The form couldn't send your message, so your email app is opening instead.", {
        ...toastOptions,
        autoClose: 4500,
      });
      window.location.href = buildMailtoLink(payload);
    }
  };

  return (
    <section id="contact" className="section-y relative overflow-hidden">
      <ToastContainer />
      <div className="page-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Left: invitation and direct links */}
          <div>
            <Reveal>
              <h2 className="text-[clamp(3rem,7.5vw,6rem)] font-bold leading-[0.92] tracking-[-0.015em] [font-stretch:92%] [word-spacing:0.06em]">
                Let&apos;s build something together.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-mute">
                I&apos;m open to new opportunities, freelance projects and collaborations. Send a message
                and I&apos;ll get back to you, usually within a day.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <CopyEmail />
            </Reveal>

            <ul className="mt-4 divide-y divide-line border-y border-line">
              {contactMethods.map((m, i) => {
                const Icon = m.icon;
                const external = !m.href.startsWith("mailto:");
                return (
                  <motion.li
                    key={m.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.07, ease: EASE }}
                  >
                    <a
                      href={m.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 py-4 transition-colors"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-xl border border-line text-mute transition-colors group-hover:border-violet group-hover:bg-violet group-hover:text-white">
                        <Icon size={16} />
                      </span>
                      <span className="w-24 text-sm text-mute">{m.title}</span>
                      <span className="flex-1 truncate font-medium transition-transform duration-300 group-hover:translate-x-1">
                        {m.value}
                      </span>
                      <FiArrowUpRight className="text-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-marigold" />
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-line bg-surface/70 p-6 shadow-[0_40px_100px_-40px_rgba(139,108,255,0.45)] sm:p-9">
              <h3 className="text-2xl font-bold tracking-tight">Send a message</h3>
              <p className="mt-1.5 text-[0.95rem] text-mute">All fields are required.</p>

              <form ref={form} onSubmit={sendEmail} className="mt-7 grid gap-4">
                {/* Honeypot: hidden from people, often filled in by spam bots */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                  <label>
                    Website
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-sm text-mute">
                    Your name
                    <input type="text" name="user_name" required maxLength={100} autoComplete="name" className="field" />
                  </label>
                  <label className="grid gap-1.5 text-sm text-mute">
                    Your email
                    <input type="email" name="user_email" required maxLength={200} autoComplete="email" className="field" />
                  </label>
                </div>
                <label className="grid gap-1.5 text-sm text-mute">
                  Subject
                  <input type="text" name="subject" required maxLength={200} className="field" />
                </label>
                <label className="grid gap-1.5 text-sm text-mute">
                  Message
                  <textarea name="message" rows="6" required maxLength={5000} className="field resize-y" />
                </label>
                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary mt-2 w-full !py-4 text-base disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSending ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message <FiSend />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
