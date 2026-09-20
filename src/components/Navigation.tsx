import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuOverlay from './MenuOverlay';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroSection, setHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setHeroSection(window.scrollY < window.innerHeight * 0.85);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isLight = !heroSection && scrolled;

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled
              ? 'bg-[var(--syn-bg)]/95 backdrop-blur-sm border-b border-[var(--syn-border)]'
              : ''
          }`}
        />
        <div className="relative syn-container flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`font-display font-bold text-base tracking-[0.12em] uppercase transition-colors duration-500 ${
              isLight ? 'text-[var(--syn-text)]' : 'text-[var(--syn-dark-text)]'
            }`}
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}
          >
            SYN<span className={`font-light ${isLight ? 'text-[var(--syn-text-muted)]' : 'text-white/60'}`}>tex</span>
          </a>

          {/* Right side */}
          <div className="flex items-center gap-6 lg:gap-10">
            <span
              className={`hidden lg:block font-mono text-[0.625rem] tracking-widest uppercase transition-colors duration-500 ${
                isLight ? 'text-[var(--syn-text-faint)]' : 'text-white/40'
              }`}
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Windhoek · Namibia
            </span>

            <a
              href="#contact"
              className={`hidden md:block font-mono text-[0.6875rem] tracking-[0.12em] uppercase transition-colors duration-500 hover:opacity-60 ${
                isLight ? 'text-[var(--syn-text)]' : 'text-[var(--syn-dark-text)]'
              }`}
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Contact
            </a>

            {/* Menu toggle */}
            <button
              onClick={() => setMenuOpen(true)}
              className={`flex flex-col gap-[5px] items-end transition-colors duration-500 hover:opacity-60 ${
                isLight ? 'text-[var(--syn-text)]' : 'text-[var(--syn-dark-text)]'
              }`}
              aria-label="Open menu"
            >
              <span
                className={`block h-[1px] bg-current transition-all duration-300 ${isLight ? 'w-6' : 'w-6'}`}
              />
              <span
                className={`block h-[1px] bg-current transition-all duration-300 w-4`}
              />
              <span
                className={`font-mono text-[0.5625rem] tracking-widest uppercase mt-[2px]`}
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Menu
              </span>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
