/**
 * Fixed decorative background: two slowly drifting colour fields and a film grain.
 * Sits behind all content and ignores pointer events.
 */
const Background = () => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute -left-[15%] -top-[20%] h-[70vh] w-[70vw] animate-drift rounded-full bg-violet/[0.13] blur-[120px]" />
    <div className="absolute -bottom-[25%] -right-[10%] h-[60vh] w-[55vw] animate-drift-slow rounded-full bg-marigold/[0.07] blur-[140px]" />
    <div className="grain absolute inset-0 opacity-[0.05] mix-blend-overlay" />
  </div>
);

export default Background;
