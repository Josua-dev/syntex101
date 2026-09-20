import { motion } from 'framer-motion';

interface MenuOverlayProps {
  onClose: () => void;
}

const navItems = [
  { number: '01', label: 'Home', href: '#' },
  { number: '02', label: 'About', href: '#about' },
  { number: '03', label: 'Solutions', href: '#solutions' },
  { number: '04', label: 'Projects', href: '#projects' },
  { number: '05', label: 'Process', href: '#process' },
  { number: '06', label: 'Contact', href: '#contact' },
];

export default function MenuOverlay({ onClose }: MenuOverlayProps) {
  const handleNav = (href: string) => {
    onClose();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[var(--syn-dark-bg)] flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Top bar */}
      <div className="syn-container flex items-center justify-between h-16 lg:h-20">
        <span
          className="font-bold text-base tracking-[0.1em] uppercase text-[var(--syn-dark-text)]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          SYN<span className="font-light text-white/50">tex</span>
        </span>

        <button
          onClick={onClose}
          className="flex flex-col items-center gap-1 text-[var(--syn-dark-text)] hover:opacity-60 transition-opacity"
          aria-label="Close menu"
        >
          <span className="block w-5 h-[1px] bg-current rotate-45 translate-y-[3px]" />
          <span className="block w-5 h-[1px] bg-current -rotate-45 -translate-y-[3px]" />
          <span
            className="font-mono text-[0.5625rem] tracking-widest uppercase mt-2 text-white/40"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Close
          </span>
        </button>
      </div>

      {/* Nav items */}
      <div className="flex-1 syn-container flex flex-col justify-center">
        <div className="border-t border-white/10">
          {navItems.map((item, i) => (
            <motion.button
              key={item.number}
              onClick={() => handleNav(item.href)}
              className="w-full flex items-center gap-6 py-5 lg:py-7 border-b border-white/10 group text-left hover:opacity-70 transition-opacity"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="font-mono text-[0.625rem] tracking-widest text-white/30 w-8"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {item.number}
              </span>
              <span
                className="text-[clamp(2rem,6vw,5rem)] font-light text-[var(--syn-dark-text)] leading-none tracking-tight"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
              >
                {item.label}
              </span>
              <span className="ml-auto text-white/30 text-xl translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <motion.div
        className="syn-container pb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div>
          <p
            className="font-mono text-[0.625rem] tracking-widest uppercase text-white/30 mb-2"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Location
          </p>
          <p className="text-[var(--syn-dark-text-muted)] text-sm">
            Windhoek, Namibia
          </p>
        </div>
        <div>
          <p
            className="font-mono text-[0.625rem] tracking-widest uppercase text-white/30 mb-2"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Est.
          </p>
          <p className="text-[var(--syn-dark-text-muted)] text-sm">2008</p>
        </div>
        <div>
          <p
            className="font-mono text-[0.625rem] tracking-widest uppercase text-white/30 mb-2"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Enquiries
          </p>
          <a
            href="mailto:info@syntexnam.com"
            className="text-[var(--syn-dark-text)] text-sm hover:text-white/60 transition-colors"
          >
            info@syntexnam.com
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
