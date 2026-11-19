import { motion, useScroll, useSpring } from "framer-motion";

/** Thin bar at the very top of the page that fills as you scroll. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-violet via-[#c58cff] to-marigold"
    />
  );
};

export default ScrollProgress;
