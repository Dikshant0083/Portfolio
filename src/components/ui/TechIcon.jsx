import { techIcons } from "./techIcons";

/**
 * Renders a skill's logo: the image from /assets when there is one,
 * otherwise the matching vector icon.
 */
const TechIcon = ({ skill, className = "h-6 w-6" }) => {
  if (skill.logo) {
    return <img src={skill.logo} alt="" className={`${className} object-contain`} loading="lazy" />;
  }
  const entry = techIcons[skill.icon];
  if (!entry) return null;
  const { Icon, color } = entry;
  return <Icon className={className} style={{ color }} aria-hidden="true" />;
};

export default TechIcon;
