import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { navItems, profile } from "../../constants";
import { EASE } from "../ui/motion";

const socials = [
  { icon: FaGithub, href: profile.github, label: "GitHub" },
  { icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: FaWhatsapp, href: profile.whatsapp, label: "WhatsApp" },
];

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-line pt-16">
    <div className="page-x">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-mute transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-mute transition-colors hover:border-violet hover:text-ink"
            >
              <Icon size={18} />
            </a>
          ))}
          <a
            href="#about"
            aria-label="Back to top"
            className="ml-2 grid h-11 w-11 place-items-center rounded-full bg-ink text-night transition-transform hover:-translate-y-1"
          >
            <FiArrowUp size={18} />
          </a>
        </div>
      </div>
    </div>

    {/* Oversized outlined name */}
    <motion.p
      aria-hidden="true"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: EASE }}
      className="mt-12 select-none whitespace-nowrap bg-gradient-to-b from-ink/[0.14] to-ink/0 bg-clip-text pb-[0.06em] text-center font-display text-[12.5vw] font-extrabold leading-[0.85] tracking-[-0.03em] text-transparent [font-stretch:85%]"
    >
      {profile.firstName} {profile.lastName}
    </motion.p>

    <div className="page-x flex flex-col gap-2 border-t border-line py-6 text-sm text-mute sm:flex-row sm:justify-between">
      <p>© {new Date().getFullYear()} Dikshant Choudhary</p>
      <p>Built with React, Tailwind CSS and Framer Motion</p>
    </div>
  </footer>
);

export default Footer;
