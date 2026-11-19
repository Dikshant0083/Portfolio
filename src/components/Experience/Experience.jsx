import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experience } from "../../constants";
import SectionHeading from "../ui/SectionHeading";
import { techIcons } from "../ui/techIcons";
import { EASE, rise, stagger } from "../ui/motion";

// Tabbed list of what the role involves, one tab per area of work.
const FocusAreas = ({ areas }) => {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const area = areas[active];

  const onKeyDown = (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (active + (e.key === "ArrowRight" ? 1 : -1) + areas.length) % areas.length;
    setActive(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  return (
    <div className="min-w-0">
      <div
        role="tablist"
        aria-label="Areas of work"
        onKeyDown={onKeyDown}
        className="-mx-1 flex gap-1 overflow-x-auto rounded-full border border-line bg-night/60 p-1 [scrollbar-width:none]"
      >
        {areas.map((a, i) => (
          <button
            key={a.title}
            id={`${baseId}-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls={`${baseId}-panel`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              i === active ? "text-white" : "text-mute hover:text-ink"
            }`}
          >
            {i === active && (
              <motion.span
                layoutId={`${baseId}-pill`}
                className="absolute inset-0 rounded-full bg-violet"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">{a.title}</span>
          </button>
        ))}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        className="mt-6 min-h-[22rem]"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={area.title}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <p className="text-sm text-mute">Built with {area.tools}</p>
            <motion.ul
              className="mt-4 space-y-3.5"
              initial="hidden"
              animate="show"
              variants={stagger(0.05, 0.05)}
            >
              {area.points.map((point) => (
                <motion.li key={point} variants={rise} className="flex gap-4">
                  <span aria-hidden="true" className="mt-[0.62rem] h-1.5 w-1.5 shrink-0 rounded-full bg-marigold" />
                  <span className="text-ink/90">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const Experience = () => (
  <section id="experience" className="section-y relative">
    <div className="page-x">
      <SectionHeading title="Experience">
        Backend engineering on a production health-insurance platform, from partner APIs to the
        tools the team uses to keep issuance running.
      </SectionHeading>

      <div className="space-y-8">
        {experience.map((job) => (
          <motion.article
            key={job.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative overflow-hidden rounded-[2rem] border border-line bg-surface/70"
          >
            {/* Accent edge that grows in when the card appears */}
            <motion.span
              aria-hidden="true"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: EASE }}
              className="absolute bottom-0 left-0 top-0 w-1 origin-top bg-gradient-to-b from-marigold to-violet"
            />

            <div className="grid grid-cols-1 gap-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-14">
              {/* Company and role */}
              <div>
                <div className="flex items-center gap-4">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-line bg-night font-display text-lg font-extrabold tracking-tight">
                    {job.short}
                  </span>
                  {job.current && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-marigold/15 px-3 py-1 text-xs font-semibold text-marigold">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-marigold" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-marigold" />
                      </span>
                      Current role
                    </span>
                  )}
                </div>
                <h3 className="mt-6 text-[clamp(1.9rem,3.4vw,2.5rem)] font-bold leading-[1] tracking-[-0.012em] [font-stretch:92%]">
                  {job.role}
                </h3>
                <p className="mt-3 text-lg text-ink/85">
                  {job.company} ({job.short})
                </p>
                <p className="mt-1 text-mute">
                  {job.team}
                  <br />
                  {job.date}
                </p>
                <p className="mt-6 text-mute">{job.summary}</p>
              </div>

              <FocusAreas areas={job.areas} />
            </div>

            {/* Tech stack */}
            <motion.ul
              aria-label="Technologies used"
              className="flex flex-wrap gap-2 border-t border-line px-6 py-6 sm:px-10"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger(0.03, 0.3)}
            >
              {job.stack.map((key) => {
                const { Icon, color, label } = techIcons[key];
                return (
                  <motion.li
                    key={key}
                    variants={rise}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-night/60 py-1.5 pl-1.5 pr-3.5 text-sm font-medium"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-ink">
                      <Icon className="h-3.5 w-3.5" style={{ color }} aria-hidden="true" />
                    </span>
                    {label}
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
