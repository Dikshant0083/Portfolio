import { allSkills } from "../../constants";
import TechIcon from "../ui/TechIcon";

/** Infinite horizontal strip of the technologies I use. Pauses on hover. */
const Marquee = () => {
  const items = [...allSkills, ...allSkills]; // duplicated for a seamless loop

  return (
    <div
      className="group relative overflow-hidden border-y border-line bg-surface/40 py-5 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
      aria-label="Technologies I work with"
    >
      <ul className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
        {items.map((skill, i) => (
          <li
            key={`${skill.name}-${i}`}
            aria-hidden={i >= allSkills.length}
            className="flex shrink-0 items-center gap-2.5 rounded-full border border-line bg-night/60 py-1.5 pl-1.5 pr-4"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink">
              <TechIcon skill={skill} className="h-5 w-5" />
            </span>
            <span className="whitespace-nowrap text-sm font-medium text-ink/90">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Marquee;
