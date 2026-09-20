import AnimatedText from './AnimatedText';
import SectionLabel from './SectionLabel';

const PROJ_IMAGES = [
  'https://images.pexels.com/photos/29402986/pexels-photo-29402986.jpeg?auto=compress&cs=tinysrgb&h=700&w=1200',
  'https://images.pexels.com/photos/19782580/pexels-photo-19782580.jpeg?auto=compress&cs=tinysrgb&h=700&w=1200',
  'https://images.pexels.com/photos/4682189/pexels-photo-4682189.jpeg?auto=compress&cs=tinysrgb&h=700&w=1200',
];

const projects = [
  {
    number: '01',
    title: 'Border Control Management',
    subtitle: 'National Immigration Infrastructure',
    tags: ['Immigration Systems', 'Multi-Country', 'Security'],
    region: 'Africa & Beyond',
    detail: '10+ Countries',
    image: PROJ_IMAGES[0],
  },
  {
    number: '02',
    title: 'Enterprise Security Infrastructure',
    subtitle: 'Integrated Access Control Deployment',
    tags: ['Access Control', 'Biometrics', 'CCTV'],
    region: 'Windhoek, Namibia',
    detail: 'Security Systems',
    image: PROJ_IMAGES[1],
  },
  {
    number: '03',
    title: 'Utility & Billing Platform',
    subtitle: 'Revenue Management Systems',
    tags: ['Utility', 'Billing', 'ERP'],
    region: 'Namibia',
    detail: 'Enterprise Systems',
    image: PROJ_IMAGES[2],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[var(--syn-bg)] syn-section">
      <div className="syn-container">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <AnimatedText>
            <SectionLabel number="03 —" text="Selected Work" className="mb-8" />
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2
              className="font-light text-[var(--syn-text)] leading-[1.04]"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 6.5rem)',
                letterSpacing: '-0.025em',
                maxWidth: '22ch',
              }}
            >
              Systems deployed where they matter most.
            </h2>
          </AnimatedText>
        </div>

        {/* Project rows */}
        <div className="space-y-0">
          {projects.map((project, i) => (
            <AnimatedText key={project.number} delay={0.1 * i}>
              <div className="group border-t border-[var(--syn-border)] py-10 lg:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                  {/* Left: text */}
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-5">
                      <span
                        className="font-mono text-[0.625rem] tracking-widest text-[var(--syn-text-faint)] pt-1 flex-shrink-0"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {project.number}
                      </span>
                      <div>
                        <h3
                          className="font-light text-[var(--syn-text)] leading-tight mb-2"
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(1.5rem, 3vw, 3.8rem)',
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {project.title}
                        </h3>
                        <p
                          className="text-[var(--syn-text-muted)]"
                          style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem' }}
                        >
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pl-[calc(1.25rem+1.25rem)]">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[var(--syn-border)] px-3 py-1 font-mono text-[0.5625rem] tracking-widest uppercase text-[var(--syn-text-muted)]"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="pl-[calc(1.25rem+1.25rem)] flex gap-8">
                      <div>
                        <p
                          className="font-mono text-[0.5rem] tracking-widest uppercase text-[var(--syn-text-faint)] mb-1"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          Region
                        </p>
                        <p
                          className="text-[var(--syn-text-muted)] text-sm"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {project.region}
                        </p>
                      </div>
                      <div>
                        <p
                          className="font-mono text-[0.5rem] tracking-widest uppercase text-[var(--syn-text-faint)] mb-1"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          Type
                        </p>
                        <p
                          className="text-[var(--syn-text-muted)] text-sm"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {project.detail}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: image */}
                  <div className="relative overflow-hidden aspect-[16/9] lg:aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </AnimatedText>
          ))}
          <div className="border-t border-[var(--syn-border)]" />
        </div>
      </div>
    </section>
  );
}
