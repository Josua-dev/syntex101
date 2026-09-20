import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HERO_IMAGE = 'https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen min-h-[600px] bg-[var(--syn-dark-bg)] overflow-hidden flex flex-col"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        <img
          src={HERO_IMAGE}
          alt="Technology infrastructure"
          className="w-full h-full object-cover opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--syn-dark-bg)] via-[var(--syn-dark-bg)]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--syn-dark-bg)] via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex-1 syn-container flex flex-col justify-center pt-20 lg:pt-24"
        style={{ y: textY }}
      >
        <div className="max-w-[55rem]">
          {/* Category label */}
          <motion.div
            className="flex items-center gap-4 mb-10 lg:mb-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span
              className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-white/40"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Technology Systems
            </span>
            <span className="w-8 h-[1px] bg-white/20" />
            <span
              className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-white/40"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Namibia
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-[var(--syn-dark-text)] font-light leading-[1.01] tracking-tight mb-10 lg:mb-14"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 7.5vw, 9.5rem)',
              letterSpacing: '-0.025em',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Engineering the
            <br />
            systems that
            <br />
            <span className="text-white/50">connect infrastructure.</span>
          </motion.h1>

          {/* Tagline & description */}
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-end gap-6 lg:gap-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex-1 max-w-sm">
              <p
                className="text-white/50 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Security systems, enterprise platforms and utility infrastructure —
                engineered for complex environments across Africa and beyond.
              </p>
            </div>
            <div>
              <p
                className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-white/25 mb-1"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Est.
              </p>
              <p
                className="text-white/40 text-sm"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Windhoek, Namibia — 2008
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="relative z-10 syn-container pb-8 flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            className="w-[1px] h-10 bg-white/20 origin-top"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span
            className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-white/30"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Scroll to explore
          </span>
        </div>

        <span
          className="font-mono text-[0.5625rem] tracking-[0.15em] uppercase text-white/20"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Synergy to Excel
        </span>
      </motion.div>
    </section>
  );
}
