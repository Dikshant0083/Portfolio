import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const CONTACT_EMAIL = "khileridikshant@gmail.com";
const EMAILJS_CONFIG = {
  serviceId: "service_8wyighj",
  templateId: "template_19ug2zh",
  publicKey: "YINI_Oo-3qKpCJRSb",
};

const contactMethods = [
  {
    title: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: FaEnvelope,
    accent: "from-rose-500/25 to-orange-500/10",
    note: "Best for opportunities, collaborations, and detailed conversations.",
  },
  {
    title: "WhatsApp",
    value: "+91 74248 33954",
    href: "https://wa.me/917424833954",
    icon: FaWhatsapp,
    accent: "from-emerald-500/25 to-lime-500/10",
    note: "Fastest way to reach me for quick chats and project discussions.",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/dikshantchoudhary",
    href: "https://www.linkedin.com/in/dikshantchoudhary/?skipRedirect=true",
    icon: FaLinkedinIn,
    accent: "from-sky-500/25 to-blue-500/10",
    note: "Connect with me professionally and explore my background.",
  },
  {
    title: "GitHub",
    value: "github.com/Dikshant0083",
    href: "https://github.com/Dikshant0083",
    icon: FaGithub,
    accent: "from-fuchsia-500/20 to-violet-500/10",
    note: "Check out my repositories, projects, and recent code.",
  },
];

const buildMailtoLink = ({ user_name, user_email, subject, message }) => {
  const mailSubject = subject?.trim() || "Portfolio Contact";
  const mailBody = [
    `Name: ${user_name || ""}`,
    `Email: ${user_email || ""}`,
    "",
    message || "",
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    mailSubject
  )}&body=${encodeURIComponent(mailBody)}`;
};

const Contact = () => {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(form.current);
    const templateParams = {
      user_name: formData.get("user_name")?.toString().trim() || "",
      from_name: formData.get("user_name")?.toString().trim() || "",
      user_email: formData.get("user_email")?.toString().trim() || "",
      from_email: formData.get("user_email")?.toString().trim() || "",
      reply_to: formData.get("user_email")?.toString().trim() || "",
      subject: formData.get("subject")?.toString().trim() || "",
      title: formData.get("subject")?.toString().trim() || "",
      message: formData.get("message")?.toString().trim() || "",
      to_email: CONTACT_EMAIL,
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        {
          publicKey: EMAILJS_CONFIG.publicKey,
        }
      );

      form.current.reset();
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } catch (error) {
      const errorMessage =
        error?.text || error?.message || "EmailJS request failed";

      console.error("Error sending message:", error);
      toast.info("Email service is unavailable. Opening your email app instead.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });

      window.location.href = buildMailtoLink(templateParams);
      console.warn("EmailJS fallback triggered:", errorMessage);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-[8vw] py-24 md:px-[7vw] lg:px-[10vw]"
    >
      <ToastContainer />

      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white">CONTACT</h2>
          <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-purple-500"></div>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-gray-400">
            Reach out through the form or connect with me directly on the platforms
            below.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-white/10 bg-[#0d081f]/90 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
              Direct Contact
            </p>
            <h3 className="mt-4 text-3xl font-bold text-white">
              Let&apos;s build something meaningful together.
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
              Whether you want to discuss a project, a role, a collaboration, or just
              say hello, you can reach me on the platforms below.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactMethods.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className={`group rounded-2xl border border-white/10 bg-gradient-to-br ${item.accent} p-[1px] transition duration-300 hover:-translate-y-1`}
                  >
                    <div className="h-full rounded-2xl bg-[#140f29] px-5 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/8 text-lg text-white">
                          <Icon />
                        </div>
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-200">
                            {item.title}
                          </p>
                          <p className="mt-1 break-all text-sm font-medium text-white">
                            {item.value}
                          </p>
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-6 text-gray-400">{item.note}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0d081f] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-8">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                Contact Form
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Send a message</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                If you prefer email, fill out the form and I&apos;ll get back to you soon.
              </p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl border border-gray-700 bg-[#131025] px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
              />
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl border border-gray-700 bg-[#131025] px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full rounded-xl border border-gray-700 bg-[#131025] px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                required
                className="w-full rounded-xl border border-gray-700 bg-[#131025] px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
              />

              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
