import { motion } from "framer-motion";
import { SkillsInfo } from "../../constants";
import SectionHeading from "../ui/SectionHeading";
import TechIcon from "../ui/TechIcon";
import { rise, stagger } from "../ui/motion";

const Skills = () => (
  <section id="skills" className="section-y relative">
    <div className="page-x">
      <SectionHeading title="Skills and tools">
        The languages, frameworks and tools I use to take a project from an idea to a deployed app.
      </SectionHeading>

      <div className="divide-y divide-line">
        {SkillsInfo.map((category) => (
          <motion.div
            key={category.title}
            className="grid gap-6 py-10 first:pt-0 md:grid-cols-[minmax(0,17rem)_1fr] md:gap-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger(0.045)}
          >
            <motion.div variants={rise}>
              <h3 className="text-3xl font-bold tracking-tight [font-stretch:88%]">
                {category.title}
              </h3>
              <p className="mt-2 text-[0.95rem] text-mute">{category.blurb}</p>
            </motion.div>

            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {category.skills.map((skill) => (
                <motion.li
                  key={skill.name}
                  variants={rise}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className="group flex items-center gap-3 rounded-2xl border border-line bg-surface/60 px-3.5 py-3 transition-colors hover:border-violet/60 hover:bg-raised"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110">
                    <TechIcon skill={skill} className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-medium leading-tight">{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
