import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from './AnimatedText';
import SectionLabel from './SectionLabel';

const services = [
  {
    number: '01',
    title: 'Security Systems',
    short: 'Access Control & Biometric Infrastructure',
    description:
      'State-of-the-art access control software integrating the most advanced security technologies with innovative networking capabilities — delivering full-featured security solutions for complex environments.',
    items: ['Access Control', 'Biometric Systems', 'CCTV & Surveillance', 'Perimeter Security', 'Security Audit'],
  },
  {
    number: '02',
    title: 'Border Control Management',
    short: 'National Immigration Infrastructure',
    description:
      'Our Border Control Management solution provides a convenient way to manage immigration across national borders. Implemented in over 10 countries worldwide, our system handles the full immigration lifecycle with precision and reliability.',
    items: ['Immigration Management', 'Passport Verification', 'Multi-Country Deployment', 'National Border Systems', 'Operational Reporting'],
  },
  {
    number: '03',
    title: 'Enterprise Resource Planning',
    short: 'Unified Business Systems',
    description:
      'Comprehensive ERP software solutions to integrate and manage various business processes, functions and resources within a unified system — providing a centralised, real-time view of core business operations for efficient planning and decision-making.',
    items: ['Business Process Integration', 'Financial Management', 'Supply Chain', 'Real-Time Reporting', 'Multi-Site Operations'],
  },
  {
    number: '04',
    title: 'Human Resources & Payroll',
    short: 'People Systems & Administration',
    description:
      'Human Resource Systems providing assistance with applicant tracking, interview scheduling, salary administration, benefits, job history, performance appraisals, training, certification, attendance, disciplinary actions and property management.',
    items: ['Applicant Tracking', 'Payroll & Benefits', 'Performance Management', 'Training & Certification', 'Attendance Systems'],
  },
  {
    number: '05',
    title: 'Utility & Billing Systems',
    short: 'Revenue & Operations Management',
    description:
      'Utility and Billing systems providing organisations with complete control over their business processes — including readings, adjustments, billing with complex pricing rates, receipts, connections and disconnections.',
    items: ['Meter Reading Management', 'Complex Billing Rates', 'Receipts & Payments', 'Connection Management', 'Operational Control'],
  },
  {
    number: '06',
    title: 'Business & Technology Consulting',
    short: 'Strategy, Audit & Advisory',
    description:
      'Consulting services for Project Management, Change Management, Business Process Re-Engineering, and ICT and Security Audit — helping organisations align technology investments with strategic objectives.',
    items: ['Project Management', 'Change Management', 'Business Process Re-Engineering', 'ICT Audit', 'Security Audit'],
  },
  {
    number: '07',
    title: 'Hardware Supply & Delivery',
    short: 'Technology Infrastructure',
    description:
      'We supply all various hardware components and deliver directly to your site — ensuring the physical infrastructure layer of your technology systems is sourced, configured and deployed reliably.',
    items: ['Hardware Procurement', 'Configuration & Setup', 'Site Delivery', 'Infrastructure Components', 'Vendor Management'],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="solutions" className="bg-[var(--syn-surface-muted,#F3F3F1)] py-[var(--section-padding-y)]" style={{ background: 'var(--syn-surface-muted,#F3F3F1)' }}>
      <div className="syn-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16 mb-16 lg:mb-20">
          <div>
            <AnimatedText>
              <SectionLabel number="02 —" text="Our Solutions" className="mb-8" />
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
                Systems engineered
                <br />
                with clarity and precision.
              </h2>
            </AnimatedText>
          </div>
          <AnimatedText delay={0.2} className="lg:max-w-xs flex-shrink-0">
            <p
              className="text-[var(--syn-text-muted)] leading-relaxed"
              style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', lineHeight: 1.7 }}
            >
              End-to-end technology solutions for mid-market and large enterprise customers,
              built on international standards and best practices.
            </p>
          </AnimatedText>
        </div>

        {/* Accordion */}
        <div className="border-t border-[var(--syn-border)]">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedText key={service.number} delay={0.05 * index}>
                <div className="border-b border-[var(--syn-border)]">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center gap-4 lg:gap-8 py-5 lg:py-7 text-left group hover:opacity-80 transition-opacity"
                  >
                    <span
                      className="font-mono text-[0.625rem] tracking-widest text-[var(--syn-text-faint)] w-6 flex-shrink-0"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {service.number}
                    </span>
                    <span
                      className="flex-1 font-light text-[var(--syn-text)]"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.1rem, 2.5vw, 2.2rem)',
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {service.title}
                    </span>
                    <span
                      className="hidden md:block font-mono text-[0.625rem] tracking-widest text-[var(--syn-text-faint)] uppercase flex-shrink-0 mr-4"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {service.short}
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
                        <div className="pl-10 lg:pl-14 pb-10 lg:pb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                          <div>
                            <div className="mb-6">
                              <span
                                className="font-mono text-[0.5625rem] tracking-widest uppercase text-[var(--syn-text-faint)] block mb-3"
                                style={{ fontFamily: 'var(--font-mono)' }}
                              >
                                {service.number}
                              </span>
                              <h3
                                className="font-light text-[var(--syn-text)] leading-tight mb-5"
                                style={{
                                  fontFamily: 'var(--font-display)',
                                  fontSize: 'clamp(1.5rem, 3vw, 3.5rem)',
                                  letterSpacing: '-0.02em',
                                }}
                              >
                                {service.title}
                              </h3>
                            </div>
                            <p
                              className="text-[var(--syn-text-muted)] leading-relaxed mb-8"
                              style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '38ch' }}
                            >
                              {service.description}
                            </p>
                            <a href="#contact" className="syn-link-arrow">
                              <span>Enquire about this solution</span>
                              <span>→</span>
                            </a>
                          </div>
                          <div>
                            <p
                              className="font-mono text-[0.5625rem] tracking-widest uppercase text-[var(--syn-text-faint)] mb-4"
                              style={{ fontFamily: 'var(--font-mono)' }}
                            >
                              Includes
                            </p>
                            <ul className="space-y-2">
                              {service.items.map((item) => (
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
