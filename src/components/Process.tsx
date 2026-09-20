import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from './AnimatedText';
import SectionLabel from './SectionLabel';

const steps = [
  {
    number: '01',
    title: 'Discover',
    short: 'Understanding your environment',
    description:
      'Before we design anything, we understand everything. We assess the environment, map the requirements, identify the risks, and understand the users, infrastructure and operational conditions that will determine the right solution.',
    items: [
      'Site & environment assessment',
      'Stakeholder requirements',
      'Risk and compliance review',
      'Infrastructure audit',
      'Operational workflow analysis',
    ],
  },
  {
    number: '02',
    title: 'Design',
    short: 'Architecting the right solution',
    description:
      'With complete understanding of the environment, we architect a solution that is specific, not generic. Technology selections are justified against requirements. System architecture is designed for integration from the start.',
    items: [
      'Solution architecture',
      'Technology specification',
      'Integration design',
      'Security architecture',
      'Implementation roadmap',
    ],
  },
  {
    number: '03',
    title: 'Integrate',
    short: 'Connecting systems as one',
    description:
      'Integration is where complexity meets precision. We deploy, configure and connect each component so that the full system operates as a coherent whole — eliminating silos, reducing friction, and ensuring each part serves the complete solution.',
    items: [
      'System deployment',
      'Component configuration',
      'Inter-system connectivity',
      'Testing & quality assurance',
      'Data migration & validation',
    ],
  },
  {
    number: '04',
    title: 'Deliver',
    short: 'Supporting ongoing operations',
    description:
      'Delivery does not mean handover and departure. We train, document, and remain available. Our ongoing support ensures the system performs as designed — and adapts as your organisation grows and requirements evolve.',
    items: [
      'End-user training',
      'Technical documentation',
      'Go-live support',
      'Ongoing maintenance',
      'System optimisation',
    ],
  },
];

export default function Process() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="process" className="bg-[var(--syn-bg)] syn-section">
      <div className="syn-container">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <AnimatedText>
            <SectionLabel number="05 —" text="Our Process" className="mb-8" />
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2
              className="font-light text-[var(--syn-text)] leading-[1.04]"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 6.5rem)',
                letterSpacing: '-0.025em',
              }}
            >
              From discovery
              <br />
              to delivery.
            </h2>
          </AnimatedText>
        </div>

        {/* Steps accordion */}
        <div className="border-t border-[var(--syn-border)]">
          {steps.map((step, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimatedText key={step.number} delay={0.08 * i}>
                <div className="border-b border-[var(--syn-border)]">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 lg:gap-8 py-6 lg:py-8 text-left group hover:opacity-75 transition-opacity"
                  >
                    <span
                      className="font-mono text-[0.625rem] tracking-widest text-[var(--syn-text-faint)] w-6 flex-shrink-0"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {step.number}
                    </span>
                    <span
                      className="flex-1 font-light text-[var(--syn-text)]"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.3rem, 3vw, 3.5rem)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {step.title}
                    </span>
                    <span
                      className="hidden md:block font-mono text-[0.625rem] tracking-widest text-[var(--syn-text-faint)] uppercase flex-shrink-0 mr-4"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {step.short}
                    </span>
                    <span
                      className={`flex-shrink-0 text-[var(--syn-text)] text-xl font-light transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : 'rotate-0'
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-10 lg:pl-14 pb-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                          <p
                            className="text-[var(--syn-text-muted)] leading-relaxed"
                            style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', lineHeight: 1.7 }}
                          >
                            {step.description}
                          </p>
                          <ul className="space-y-2">
                            {step.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-center gap-3 text-[var(--syn-text-muted)]"
                                style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem' }}
                              >
                                <span className="w-3 h-[1px] bg-[var(--syn-border)] flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedText>
            );
          })}
        </div>
      </div>
    </section>
  );
}
