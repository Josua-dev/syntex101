import AnimatedText from './AnimatedText';
import SectionLabel from './SectionLabel';

export default function Contact() {
  return (
    <section id="contact" className="bg-[var(--syn-dark-bg)] py-[var(--section-padding-y)]">
      <div className="syn-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: editorial CTA */}
          <div>
            <AnimatedText>
              <SectionLabel number="07 —" text="Contact" light className="mb-10" />
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2
                className="font-light text-[var(--syn-dark-text)] leading-[1.03] mb-10"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.2rem, 5.5vw, 7.5rem)',
                  letterSpacing: '-0.025em',
                }}
              >
                Let's engineer
                <br />
                what comes next.
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.2} className="mb-12">
              <p
                className="text-[var(--syn-dark-text-muted)] leading-relaxed max-w-sm"
                style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', lineHeight: 1.7 }}
              >
                Whether you're scoping a new security infrastructure, migrating an
                enterprise system, or exploring what integrated technology could do for
                your organisation — we'd like to hear from you.
              </p>
            </AnimatedText>
            <AnimatedText delay={0.3}>
              <a
                href="mailto:info@syntexnam.com"
                className="syn-link-arrow-light text-base"
                style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}
              >
                <span>Start a conversation</span>
                <span>→</span>
              </a>
            </AnimatedText>
          </div>

          {/* Right: contact details */}
          <AnimatedText delay={0.15}>
            <div className="border-t border-white/10 pt-10 lg:pt-0 lg:border-t-0 space-y-10">
              <div className="border-t border-white/10 pt-8">
                <p
                  className="font-mono text-[0.5625rem] tracking-widest uppercase text-white/30 mb-3"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Email
                </p>
                <a
                  href="mailto:info@syntexnam.com"
                  className="text-[var(--syn-dark-text)] hover:text-white/60 transition-colors"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 1.8vw, 1.4rem)' }}
                >
                  info@syntexnam.com
                </a>
              </div>

              <div className="border-t border-white/10 pt-8">
                <p
                  className="font-mono text-[0.5625rem] tracking-widest uppercase text-white/30 mb-3"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Location
                </p>
                <p
                  className="text-[var(--syn-dark-text)]"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 1.8vw, 1.4rem)' }}
                >
                  Windhoek, Namibia
                </p>
              </div>

              <div className="border-t border-white/10 pt-8">
                <p
                  className="font-mono text-[0.5625rem] tracking-widest uppercase text-white/30 mb-3"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Solutions
                </p>
                <div className="space-y-1">
                  {[
                    'Security Systems',
                    'Border Control Management',
                    'Enterprise Resource Planning',
                    'HR & Payroll Systems',
                    'Utility & Billing',
                    'Business Consulting',
                    'Hardware Supply',
                  ].map((s) => (
                    <p
                      key={s}
                      className="text-[var(--syn-dark-text-muted)] text-sm"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {s}
                    </p>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <p
                  className="font-mono text-[0.5625rem] tracking-widest uppercase text-white/30 mb-3"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Website
                </p>
                <a
                  href="https://syntexnam.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--syn-dark-text)] hover:text-white/60 transition-colors text-sm"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  syntexnam.com
                </a>
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}
