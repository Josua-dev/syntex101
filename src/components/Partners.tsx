import AnimatedText from './AnimatedText';
import SectionLabel from './SectionLabel';

const NAMIBIA_IMAGE = 'https://images.pexels.com/photos/39131990/pexels-photo-39131990.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600';

const partners = [
  { name: 'Technology Partner', code: 'TP-001' },
  { name: 'Technology Partner', code: 'TP-002' },
  { name: 'Technology Partner', code: 'TP-003' },
];

export default function Partners() {
  return (
    <>
      {/* Partners section */}
      <section className="bg-[var(--syn-surface-muted,#F3F3F1)] py-[var(--section-padding-y)]" style={{ background: '#F3F3F1' }}>
        <div className="syn-container">
          <div className="mb-16 lg:mb-20">
            <AnimatedText>
              <SectionLabel number="06 —" text="Technology Partners" className="mb-8" />
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2
                className="font-light text-[var(--syn-text)] leading-[1.04]"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 5vw, 6rem)',
                  letterSpacing: '-0.025em',
                }}
              >
                Systems built with leading
                <br />
                technology platforms.
              </h2>
            </AnimatedText>
          </div>

          <AnimatedText delay={0.1}>
            <div className="border-t border-[var(--syn-border)] pt-10 lg:pt-14">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {partners.map((partner, i) => (
                  <div
                    key={partner.code}
                    className={`py-8 pr-8 ${i < 2 ? 'md:border-r border-[var(--syn-border)]' : ''} ${i > 0 ? 'md:pl-8' : ''} flex flex-col justify-between gap-4 border-b md:border-b-0 border-[var(--syn-border)]`}
                  >
                    <div>
                      <p
                        className="font-mono text-[0.5rem] tracking-widest uppercase text-[var(--syn-text-faint)] mb-6"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        Global Technology Partner
                      </p>
                      <div
                        className="w-full h-12 flex items-center justify-center border border-[var(--syn-border)] bg-[var(--syn-bg)]"
                      >
                        <span
                          className="font-mono text-[0.625rem] tracking-widest text-[var(--syn-text-faint)] uppercase"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {partner.code}
                        </span>
                      </div>
                    </div>
                    <p
                      className="text-[var(--syn-text-muted)] text-sm"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {partner.name}
                    </p>
                  </div>
                ))}
              </div>
              <p
                className="font-mono text-[0.5625rem] tracking-[0.1em] text-[var(--syn-text-faint)] mt-8"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                We partner with globally recognised technology platforms to deliver solutions
                built on proven, supported infrastructure. Partner details available on enquiry.
              </p>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Engineered in Namibia */}
      <section className="relative overflow-hidden" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0 z-0">
          <img
            src={NAMIBIA_IMAGE}
            alt="Namibia landscape"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[var(--syn-dark-bg)]/70" />
        </div>
        <div className="relative z-10 syn-container py-[var(--section-padding-y)] flex flex-col justify-center" style={{ minHeight: '60vh' }}>
          <AnimatedText>
            <span
              className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-white/40 block mb-8"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Engineered in Namibia
            </span>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2
              className="font-light text-[var(--syn-dark-text)] leading-[1.04] max-w-3xl"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 7rem)',
                letterSpacing: '-0.025em',
              }}
            >
              Technology systems designed for the environments we understand.
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2} className="mt-10">
            <p
              className="text-white/50 max-w-md leading-relaxed"
              style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', lineHeight: 1.7 }}
            >
              As a Namibian company, we bring deep local knowledge to every deployment.
              We understand the infrastructure, regulatory environment, and operational
              realities of doing complex technology work in Southern Africa — and across
              the continent.
            </p>
          </AnimatedText>
        </div>
      </section>
    </>
  );
}
