import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";

/**
 * Accessible modal: closes on Escape or backdrop click, locks page scroll,
 * and animates in and out.
 */
const Modal = ({ open, onClose, label, children, wide = false }) => {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-[#05070f]/80 backdrop-blur-md" onClick={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={label}
            className={`relative z-10 flex max-h-[90vh] w-full flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_40px_120px_-20px_rgba(0,0,0,0.7)] ${
              wide ? "max-w-6xl" : "max-w-3xl"
            }`}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              autoFocus
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-line bg-night/80 text-ink backdrop-blur transition-colors hover:border-mute hover:bg-raised"
            >
              <FiX size={20} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
