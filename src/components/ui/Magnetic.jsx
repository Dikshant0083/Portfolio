import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Wrapper that pulls its child slightly toward the cursor on hover (desktop only). */
const Magnetic = ({ children, strength = 0.3, className = "" }) => {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.2 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.2 });

  const onMove = (e) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x, y }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
