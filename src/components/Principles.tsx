import AnimatedText from './AnimatedText';
import SectionLabel from './SectionLabel';

const principles = [
  {
    number: '01',
    title: 'Integration',
    description:
      'We bring together security, enterprise, utility and infrastructure systems into unified, coherent solutions. No isolated deployments — every system is designed to speak to the whole.',
  },
  {
    number: '02',
    title: 'Precision',
    description:
      'Technology implementations built to exact specifications, tested against international standards. We do not generalise. We engineer to the specific requirements of each environment.',
  },
  {
    number: '03',
    title: 'Reliability',
    description:
      'Systems designed for continuous, uninterrupted operation in critical environments. Security infrastructure, border control and utility platforms cannot afford downtime.',
  },
  {
    number: '04',
    title: 'Scale',
    description:
      'Solutions that grow with the organisation — from single-site operations to multi-country national programmes deployed across Africa and beyond.',
  },
];

export default function Principles() {
  return (
    <section className="bg-[var(--syn-dark-bg)] py-[var(--section-padding-y)]">
      <div className="syn-container">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <AnimatedText>
            <SectionLabel number="04 —" text="Engineering Principles" light className="mb-8" />
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2
              className="font-light text-[var(--syn-dark-text)] leading-[1.04]"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 6.5rem)',
                letterSpacing: '-0.025em',
              }}
            >
              The values that shape
              <br />
              every deployment.
            </h2>
          </AnimatedText>
        </div>

        {/* Principles grid */}
        <div className="border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, i) => (
              <AnimatedText key={principle.number} delay={0.1 * i}>
                <div
                  className={`py-10 lg:py-14 pr-6 lg:pr-10 ${
                    i < 3 ? 'md:border-r border-white/10' : ''
                  }`}
                >
                  <div className="mb-6">
                    <span
                      className="font-mono text-[0.625rem] tracking-widest text-white/25 block mb-4"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {principle.number}
                    </span>
                    <h3
                      className="font-light text-[var(--syn-dark-text)] leading-none"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.8rem, 3.5vw, 4rem)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {principle.title}
                    </h3>
                  </div>
                  <p
                    className="text-[var(--syn-dark-text-muted)] leading-relaxed"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', lineHeight: 1.7 }}
                  >
                    {principle.description}
                  </p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
