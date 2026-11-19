import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navItems, profile } from "../../constants";

// Highlights the nav link of the section currently in the middle of the viewport.
const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
};

const ids = navItems.map((n) => n.id);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
    >
      <nav
        className={`mx-auto flex max-w-page items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 sm:px-4 ${
          isScrolled
            ? "border-line bg-night/75 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
        aria-label="Main"
      >
        {/* Monogram */}
        <a
          href="#about"
          className="group flex items-center gap-2.5 rounded-full py-1 pl-1 pr-2"
          aria-label="Dikshant Choudhary, back to top"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-violet to-marigold p-[1.5px]">
            <span className="grid h-full w-full place-items-center rounded-full bg-night font-display text-sm font-extrabold tracking-tight">
              DC
            </span>
          </span>
          <span className="hidden whitespace-nowrap font-display text-[0.95rem] font-semibold tracking-tight sm:block">
            Dikshant Choudhary
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative block rounded-full whitespace-nowrap px-3.5 py-2 text-sm font-medium transition-colors ${
                  active === item.id ? "text-ink" : "text-mute hover:text-ink"
                }`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.08] ring-1 ring-inset ring-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden h-10 w-10 place-items-center rounded-full text-mute transition-colors hover:bg-white/5 hover:text-ink sm:grid"
          >
            <FaGithub size={19} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden h-10 w-10 place-items-center rounded-full text-mute transition-colors hover:bg-white/5 hover:text-ink sm:grid"
          >
            <FaLinkedin size={19} />
          </a>
          <a href="#contact" className="btn-primary ml-1 hidden whitespace-nowrap !px-5 !py-2 text-sm sm:inline-flex">
            Contact me
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink xl:hidden"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-page rounded-3xl border border-line bg-night/95 p-3 backdrop-blur-xl xl:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.04 } } }}
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-2xl font-semibold ${
                      active === item.id ? "bg-white/[0.06] text-ink" : "text-mute"
                    }`}
                  >
                    {item.label}
                    {active === item.id && <span className="h-2 w-2 rounded-full bg-marigold" />}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <div className="mt-2 flex gap-2 border-t border-line px-2 pt-3">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 !py-2.5">
                <FaGithub /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 !py-2.5">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
