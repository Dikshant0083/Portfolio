import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { education } from "../../constants";
import SectionHeading from "../ui/SectionHeading";
import { EASE } from "../ui/motion";

const Education = () => {
  const listRef = useRef(null);
  // The timeline line fills in as the list scrolls through the viewport.
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="education" className="section-y relative">
      <div className="page-x">
        <SectionHeading title="Education">
          From a science foundation in Rajasthan to Computer Science Engineering at Chitkara
          University.
        </SectionHeading>

        <ol ref={listRef} className="relative ml-3 sm:ml-5">
          {/* Track and animated fill */}
          <span aria-hidden="true" className="absolute bottom-2 left-0 top-2 w-px bg-line" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute bottom-2 left-0 top-2 w-px origin-top bg-gradient-to-b from-marigold via-violet to-violet"
          />

          {education.map((edu, i) => (
            <motion.li
              key={edu.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.05 * i, ease: EASE }}
              className="relative pb-12 pl-10 last:pb-0 sm:pl-16"
            >
              {/* Node */}
              <span className="absolute -left-[7px] top-8 flex h-[15px] w-[15px] items-center justify-center">
                {edu.current && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-marigold/70" />
                )}
                <span
                  className={`relative h-[15px] w-[15px] rounded-full border-2 ${
                    edu.current ? "border-marigold bg-marigold" : "border-violet bg-night"
                  }`}
                />
              </span>

              <div className="rounded-[1.75rem] border border-line bg-surface/60 p-6 transition-colors hover:border-violet/50 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <img
                    src={edu.img}
                    alt={`${edu.school} logo`}
                    loading="lazy"
                    className="h-16 w-16 shrink-0 rounded-2xl bg-white object-contain p-1.5"
                  />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <p className="text-sm text-mute">{edu.date}</p>
                      {edu.current && (
                        <span className="rounded-full bg-marigold/15 px-2.5 py-0.5 text-xs font-semibold text-marigold">
                          Currently studying
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 text-2xl font-bold leading-tight tracking-tight">{edu.degree}</h3>
                    <p className="mt-1 text-ink/80">{edu.school}</p>
                    <p className="mt-4 text-mute">{edu.desc}</p>
                    {edu.coursework && (
                      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Coursework">
                        {edu.coursework.map((c) => (
                          <li key={c} className="chip">
                            {c}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="shrink-0 sm:text-right">
                    <p className="font-display text-3xl font-bold tracking-tight">{edu.grade.split(" ")[0]}</p>
                    <p className="text-sm text-mute">
                      {edu.grade.includes("CGPA") ? "CGPA so far" : "Board result"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Education;
