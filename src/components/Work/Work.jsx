import { useCallback, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiMaximize2 } from "react-icons/fi";
import { projects } from "../../constants";
import SectionHeading from "../ui/SectionHeading";
import Modal from "../ui/Modal";
import { EASE } from "../ui/motion";

// Screenshot inside a minimal browser window frame.
const BrowserFrame = ({ project, className = "" }) => (
  <div className={`overflow-hidden rounded-2xl border border-line bg-night ${className}`}>
    <div className="flex items-center gap-1.5 border-b border-line bg-surface px-3.5 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
      <span className="ml-3 truncate rounded-md bg-night/70 px-2.5 py-0.5 text-[0.7rem] text-mute">
        {project.webapp.replace(/^\s*https?:\/\//, "").replace(/\/$/, "")}
      </span>
    </div>
    <div className="aspect-[16/8.6] overflow-hidden">
      <img
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
    </div>
  </div>
);

const ProjectLinks = ({ project, onDetails, compact = false }) => (
  <div className="flex flex-wrap items-center gap-2">
    <a
      href={project.webapp.trim()}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary ${compact ? "!px-4 !py-2 text-sm" : ""}`}
    >
      Open live site <FiArrowUpRight />
    </a>
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-ghost ${compact ? "!px-4 !py-2 text-sm" : ""}`}
    >
      <FiGithub /> Code
    </a>
    {onDetails && (
      <button
        type="button"
        onClick={onDetails}
        className={`btn-ghost ${compact ? "!px-4 !py-2 text-sm" : ""}`}
        aria-label={`Details about ${project.title}`}
      >
        <FiMaximize2 /> Details
      </button>
    )}
  </div>
);

// Card whose border lights up under the cursor.
const SpotlightCard = ({ children, className = "" }) => {
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const bg = useMotionTemplate`radial-gradient(380px circle at ${x}px ${y}px, rgba(139,108,255,0.18), transparent 70%)`;
  const border = useMotionTemplate`radial-gradient(260px circle at ${x}px ${y}px, rgba(255,181,71,0.7), transparent 70%)`;

  return (
    <div
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      onPointerLeave={() => {
        x.set(-300);
        y.set(-300);
      }}
      className={`group relative rounded-[1.75rem] border border-line bg-surface/70 ${className}`}
    >
      {/* Highlighted border: a masked copy of the gradient that only shows on the 1px edge */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[1.75rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: border,
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: bg }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

const FeaturedProject = ({ project, flip, onDetails }) => (
  <motion.article
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: EASE }}
  >
    <SpotlightCard className="p-4 sm:p-6">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <button
          type="button"
          onClick={onDetails}
          className={`block text-left ${flip ? "lg:order-2" : ""}`}
          aria-label={`Open details for ${project.title}`}
        >
          <BrowserFrame project={project} />
        </button>
        <div className="px-1 pb-2 sm:px-2 lg:py-4">
          <p className="mb-3 text-sm font-medium text-marigold">Featured project</p>
          <h3 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-none tracking-[-0.02em] [font-stretch:92%] [word-spacing:0.06em]">
            {project.title}
          </h3>
          <p className="mt-5 max-w-md text-mute">{project.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {project.tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </SpotlightCard>
  </motion.article>
);

const ProjectCard = ({ project, index, onDetails }) => (
  <motion.article
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay: (index % 2) * 0.12, ease: EASE }}
    className="h-full"
  >
    <SpotlightCard className="flex h-full flex-col p-4">
      <button
        type="button"
        onClick={onDetails}
        className="block w-full text-left"
        aria-label={`Open details for ${project.title}`}
      >
        <BrowserFrame project={project} />
      </button>
      <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
        <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
        <p className="mt-2 flex-1 text-mute">{project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <ProjectLinks project={project} compact />
        </div>
      </div>
    </SpotlightCard>
  </motion.article>
);

const Work = () => {
  const [selected, setSelected] = useState(null);
  const close = useCallback(() => setSelected(null), []);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="section-y relative">
      <div className="page-x">
        <SectionHeading title="Selected work">
          Full-stack apps and websites I&apos;ve designed, built and deployed. Every project
          has a live version you can try.
        </SectionHeading>

        <div className="space-y-8">
          {featured.map((p, i) => (
            <FeaturedProject key={p.id} project={p} flip={i % 2 === 1} onDetails={() => setSelected(p)} />
          ))}
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {rest.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onDetails={() => setSelected(p)} />
          ))}
        </div>
      </div>

      <Modal open={!!selected} onClose={close} label={selected?.title ?? "Project details"}>
        {selected && (
          <div className="overflow-y-auto">
            <div className="p-3 sm:p-4">
              <img
                src={selected.image}
                alt={`Screenshot of ${selected.title}`}
                className="w-full rounded-2xl border border-line object-cover object-top"
              />
            </div>
            <div className="px-6 pb-8 pt-3 sm:px-8">
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">{selected.title}</h3>
              <p className="mt-4 text-mute">{selected.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                {selected.tags.map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ProjectLinks project={selected} />
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Work;
