import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight, FiImage } from "react-icons/fi";
import { certifications, hackathon } from "../../constants";
import SectionHeading from "../ui/SectionHeading";
import Modal from "../ui/Modal";
import { Reveal } from "../ui/Reveal";
import { EASE } from "../ui/motion";

// Full-size photo viewer with previous/next buttons and arrow-key support.
const Gallery = ({ startIndex }) => {
  const photos = hackathon.gallery;
  const [[index, dir], setState] = useState([startIndex, 0]);

  const go = useCallback(
    (step) => setState(([i]) => [(i + step + photos.length) % photos.length, step]),
    [photos.length]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <div className="flex min-h-0 flex-col">
      <div className="border-b border-line px-6 py-5 pr-16 sm:px-8">
        <p className="text-sm text-marigold">{hackathon.organization}, {hackathon.date}</p>
        <h3 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">{hackathon.title}</h3>
      </div>

      <div className="relative grid min-h-0 flex-1 place-items-center overflow-hidden bg-night">
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.img
            key={index}
            src={photos[index].image}
            alt={photos[index].title}
            custom={dir}
            initial={{ opacity: 0, x: dir * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -80 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="max-h-[60vh] w-auto max-w-full object-contain"
          />
        </AnimatePresence>
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-night/80 backdrop-blur transition-colors hover:bg-raised"
        >
          <FiChevronLeft size={22} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-night/80 backdrop-blur transition-colors hover:bg-raised"
        >
          <FiChevronRight size={22} />
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto border-t border-line p-3">
        {photos.map((photo, i) => (
          <button
            key={photo.title}
            type="button"
            onClick={() => setState([i, i > index ? 1 : -1])}
            aria-label={`Show photo ${i + 1}: ${photo.title}`}
            aria-current={i === index}
            className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
              i === index ? "border-marigold" : "border-transparent opacity-50 hover:opacity-100"
            }`}
          >
            <img src={photo.image} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

const Achievements = () => {
  const [galleryStart, setGalleryStart] = useState(null);
  const close = useCallback(() => setGalleryStart(null), []);
  const [a, b, c] = hackathon.gallery;

  return (
    <section id="achievements" className="section-y relative">
      <div className="page-x">
        <SectionHeading title="Achievements">
          A national hackathon finish and three industry job simulations, each with a certificate
          you can open.
        </SectionHeading>

        {/* Hackathon: text with a photo collage */}
        <Reveal>
          <div className="grid items-center gap-10 rounded-[2rem] border border-line bg-surface/60 p-5 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <p className="text-sm font-medium text-marigold">{hackathon.organization}, {hackathon.date}</p>
              <h3 className="mt-3 text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[0.95] tracking-[-0.02em] [font-stretch:92%] [word-spacing:0.06em]">
                {hackathon.title}
              </h3>
              <p className="mt-5 max-w-md text-mute">{hackathon.description}</p>
              <button type="button" onClick={() => setGalleryStart(0)} className="btn-ghost mt-8">
                <FiImage /> View all {hackathon.gallery.length} photos
              </button>
            </div>

            <div className="grid h-[22rem] grid-cols-5 grid-rows-2 gap-3 sm:h-[26rem]">
              {[
                { photo: a, i: 0, cls: "col-span-3 row-span-2" },
                { photo: b, i: 1, cls: "col-span-2" },
                { photo: c, i: 2, cls: "col-span-2" },
              ].map(({ photo, i, cls }, k) => (
                <motion.button
                  key={photo.title}
                  type="button"
                  onClick={() => setGalleryStart(i)}
                  aria-label={`Open photo: ${photo.title}`}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 + k * 0.12, ease: EASE }}
                  className={`group relative overflow-hidden rounded-2xl ${cls}`}
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/90 to-transparent p-3 text-left text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">
                    {photo.title}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Certifications */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-line bg-surface/60 transition-colors hover:border-violet/60"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-white">
                <img
                  src={cert.image}
                  alt={`${cert.organization} certificate`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm text-mute">
                  {cert.organization} on {cert.platform}, {cert.date}
                </p>
                <h3 className="mt-2 text-xl font-bold leading-tight tracking-tight">{cert.title}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] text-mute">{cert.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                  View certificate
                  <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <Modal open={galleryStart !== null} onClose={close} label="HackIndia photo gallery" wide>
        {galleryStart !== null && <Gallery startIndex={galleryStart} />}
      </Modal>
    </section>
  );
};

export default Achievements;
