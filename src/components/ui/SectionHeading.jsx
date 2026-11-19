import { Reveal } from "./Reveal";

/**
 * Large left-aligned title with a short explanatory sentence beside it.
 */
const SectionHeading = ({ title, children }) => (
  <div className="mb-14 grid gap-5 border-b border-line pb-8 md:mb-16 md:grid-cols-[1fr_minmax(0,24rem)] md:items-end">
    <Reveal>
      <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.012em] [font-stretch:92%] [word-spacing:0.06em]">
        {title}
      </h2>
    </Reveal>
    {children && (
      <Reveal delay={0.1}>
        <p className="text-mute">{children}</p>
      </Reveal>
    )}
  </div>
);

export default SectionHeading;
