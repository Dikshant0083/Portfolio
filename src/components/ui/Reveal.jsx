import { motion } from "framer-motion";
import { EASE } from "./motion";

/** Fades and lifts its children into view once, when scrolled to. */
export const Reveal = ({ children, delay = 0, y = 24, className = "", as = "div" }) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
};
