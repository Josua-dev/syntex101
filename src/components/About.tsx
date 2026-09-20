import AnimatedText from './AnimatedText';
import SectionLabel from './SectionLabel';

const ABOUT_IMAGE = 'https://images.pexels.com/photos/1181320/pexels-photo-1181320.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200';

export default function About() {
  return (
    <section id="about" className="bg-[var(--syn-bg)] syn-section">
      <div className="syn-container">
        {/* Top row: label + image intro */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16 mb-16 lg:mb-24">
          <AnimatedText>
            <SectionLabel number="01 —" text="About SYNtex" />
          </AnimatedText>
          <AnimatedText delay={0.1} className="lg:max-w-xs">
            <p
              className="font-mono text-[0.6875rem] tracking-[0.05em] leading-relaxed text-[var(--syn-text-faint)] uppercase"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Namibian ICT Systems Integrator
              <br />
              Incorporated 2008
            </p>
          </AnimatedText>
        </div>

        {/* Main heading */}
        <AnimatedText className="mb-16 lg:mb-24">
          <h2
            className="font-light text-[var(--syn-text)] leading-[1.04]"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6.5vw, 8rem)',
              letterSpacing: '-0.025em',
            }}
          >
            Engineering clarity
            <br />
            into complex systems.
          </h2>
        </AnimatedText>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left: text */}
          <div>
            <AnimatedText className="mb-8">
              <p
                className="text-[var(--syn-text-muted)] leading-relaxed"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', lineHeight: 1.7 }}
              >
                Syntex Technologies (Pty) Ltd is a Namibian ICT company incorporated in 2008.
                We excel at solving complex challenges and providing solutions that fit our
                customers' needs, serving mid-market and large enterprise clients across
                Namibia and beyond.
              </p>
            </AnimatedText>
            <AnimatedText delay={0.1} className="mb-10">
              <p
                className="text-[var(--syn-text-muted)] leading-relaxed"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', lineHeight: 1.7 }}
              >
                We consistently demonstrate our ability to identify and deliver on the promise
                of the best technological solution, based on best practices and international
                standards. From security infrastructure to enterprise systems, we offer
                complete end-to-end services.
              </p>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <a href="#solutions" className="syn-link-arrow">
                <span>Our solutions</span>
                <span>→</span>
              </a>
            </AnimatedText>
          </div>

          {/* Right: image + metadata */}
          <div>
            <AnimatedText className="mb-8">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={ABOUT_IMAGE}
                  alt="Syntex Technologies team"
                  className="w-full h-full object-cover grayscale"
                  loading="lazy"
                />
              </div>
            </AnimatedText>

            {/* Metadata row */}
            <AnimatedText delay={0.1}>
              <div className="grid grid-cols-3 gap-4 border-t border-[var(--syn-border)] pt-6">
                <div>
                  <p
                    className="font-mono text-[0.5625rem] tracking-widest uppercase text-[var(--syn-text-faint)] mb-2"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Founded
                  </p>
                  <p
                    className="text-[var(--syn-text)] font-light text-lg"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    2008
                  </p>
                </div>
                <div>
                  <p
                    className="font-mono text-[0.5625rem] tracking-widest uppercase text-[var(--syn-text-faint)] mb-2"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Location
                  </p>
                  <p
                    className="text-[var(--syn-text)] font-light text-sm leading-snug"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Windhoek,
                    <br />
                    Namibia
                  </p>
                </div>
                <div>
                  <p
                    className="font-mono text-[0.5625rem] tracking-widest uppercase text-[var(--syn-text-faint)] mb-2"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Focus
                  </p>
                  <p
                    className="text-[var(--syn-text)] font-light text-sm leading-snug"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    ICT Systems
                    <br />
                    Integration
                  </p>
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
}
