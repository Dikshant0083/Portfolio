import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiArrowDownRight, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { heroFacts, profile } from "../../constants";
import Counter from "../ui/Counter";
import Magnetic from "../ui/Magnetic";
import { EASE } from "../ui/motion";

// Splits a word into letters that rise into place one after another.
const AnimatedWord = ({ word, delay }) => (
  <span className="block overflow-hidden pb-[0.12em]" aria-hidden="true">
    {word.split("").map((char, i) => (
      <motion.span
        key={`${char}-${i}`}
        className="inline-block cursor-default will-change-transform"
        initial={{ y: "110%", rotate: 8 }}
        animate={{ y: "0%", rotate: 0 }}
        transition={{ duration: 0.9, delay: delay + i * 0.045, ease: EASE }}
        whileHover={{ y: "-8%", color: "#FFB547", transition: { duration: 0.2 } }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

// Cycles through the phrases in `profile.roles`.
const RotatingRole = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % profile.roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative grid overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={profile.roles[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="col-start-1 row-start-1 whitespace-nowrap font-semibold text-ink"
        >
          {profile.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

// Portrait inside a gradient ring. No motion.
const Portrait = () => (
  <div
    className="relative mx-auto grid aspect-square w-[min(78vw,20rem)] place-items-center sm:w-[22rem] lg:w-[20rem] xl:w-[24rem]"
  >
    {/* Glow + gradient ring */}
    <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_200deg,#8B6CFF,#FFB547,#8B6CFF)] opacity-50 blur-2xl" />
    <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_200deg,#8B6CFF,#FFB547,#8B6CFF)]" />

    {/* Photo */}
    <div className="absolute inset-[5px] overflow-hidden rounded-full bg-night">
      <img
        src={profile.photo}
        alt="Portrait of Dikshant Choudhary"
        className="h-full w-full scale-[1.12] object-cover object-[50%_35%]"
        fetchpriority="high"
      />
    </div>
  </div>
);

const About = () => {
  // Cursor-following spotlight over the dot grid
  const mx = useSpring(useMotionValue(-500), { stiffness: 120, damping: 20 });
  const my = useSpring(useMotionValue(-500), { stiffness: 120, damping: 20 });
  const glow = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(139,108,255,0.16), transparent 65%)`;
  const dotsMask = useMotionTemplate`radial-gradient(260px circle at ${mx}px ${my}px, #000 0%, transparent 100%)`;

  const onPointerMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const fade = (delay) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  return (
    <section
      id="about"
      onPointerMove={onPointerMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-32 lg:pt-28"
    >
      {/* Background layers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="dot-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_40%,transparent_100%)]" />
        <motion.div
          className="dot-grid absolute inset-0 [background-image:radial-gradient(rgba(255,181,71,0.55)_1px,transparent_1px)]"
          style={{ maskImage: dotsMask, WebkitMaskImage: dotsMask }}
        />
        <motion.div className="absolute inset-0" style={{ background: glow }} />
      </div>

      <div className="page-x relative grid items-center gap-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-10">
        {/* Text */}
        <div>
          <motion.p {...fade(0.1)} className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pl-3 pr-4 text-sm text-mute backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-marigold" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-marigold" />
            </span>
            {profile.location}
          </motion.p>

          <h1 className="font-display text-[clamp(3.6rem,11.5vw,8.6rem)] font-bold leading-[0.88] tracking-[-0.02em] [font-stretch:92%]">
            <span className="sr-only">
              {profile.firstName} {profile.lastName}
            </span>
            <AnimatedWord word={profile.firstName} delay={0.25} />
            <AnimatedWord word={profile.lastName} delay={0.55} />
          </h1>

          <motion.p {...fade(1.1)} className="mt-7 text-[clamp(1.15rem,2.2vw,1.5rem)] leading-snug text-mute">
            Full-stack developer building
            <RotatingRole />
          </motion.p>

          <motion.p {...fade(1.25)} className="mt-6 max-w-[34rem] text-mute">
            {profile.intro}
          </motion.p>

          <motion.div {...fade(1.4)} className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a href="#work" className="btn-primary">
                See my projects <FiArrowDownRight />
              </a>
            </Magnetic>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <FiDownload /> Download CV
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-full text-mute transition-colors hover:bg-white/5 hover:text-ink"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full text-mute transition-colors hover:bg-white/5 hover:text-ink"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.dl {...fade(1.55)} className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-line border-t border-line pt-6">
            {heroFacts.map((fact, i) => (
              <div key={fact.label} className={i === 0 ? "pr-4" : "px-4"}>
                <dt className="sr-only">{fact.label}</dt>
                <dd className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold leading-none tracking-tight">
                  <Counter value={fact.value} decimals={fact.decimals} prefix={fact.prefix} delay={1.6} />
                </dd>
                <dd className="mt-2 text-sm leading-snug text-mute">{fact.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Portrait */}
        <div className="py-8 lg:py-0">
          <Portrait />
        </div>
      </div>
    </section>
  );
};

export default About;
