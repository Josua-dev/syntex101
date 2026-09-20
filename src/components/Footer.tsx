const solutions = ['Security Systems', 'Border Control', 'ERP', 'HR & Payroll', 'Utility & Billing', 'Consulting', 'Hardware'];
const pages = ['About', 'Solutions', 'Projects', 'Process', 'Contact'];

export default function Footer() {
  return (
    <footer className="bg-[var(--syn-bg)] border-t border-[var(--syn-border)]">
      <div className="syn-container">
        {/* Top: large wordmark */}
        <div className="py-12 lg:py-16 border-b border-[var(--syn-border)]">
          <h2
            className="font-light text-[var(--syn-text)] leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4rem, 14vw, 18rem)',
              letterSpacing: '-0.04em',
            }}
          >
            SYN<span className="text-[var(--syn-text-faint)] font-extralight">tex</span>
          </h2>
        </div>

        {/* Middle: nav grid */}
        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-[var(--syn-border)]">
          <div>
            <p
              className="font-mono text-[0.5625rem] tracking-widest uppercase text-[var(--syn-text-faint)] mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Pages
            </p>
            <ul className="space-y-2">
              {pages.map((p) => (
                <li key={p}>
                  <a
                    href={`#${p.toLowerCase()}`}
                    className="text-[var(--syn-text-muted)] text-sm hover:text-[var(--syn-text)] transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="font-mono text-[0.5625rem] tracking-widest uppercase text-[var(--syn-text-faint)] mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Solutions
            </p>
            <ul className="space-y-2">
              {solutions.map((s) => (
                <li key={s}>
                  <a
                    href="#solutions"
                    className="text-[var(--syn-text-muted)] text-sm hover:text-[var(--syn-text)] transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="font-mono text-[0.5625rem] tracking-widest uppercase text-[var(--syn-text-faint)] mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Company
            </p>
            <ul className="space-y-2">
              <li>
                <p className="text-[var(--syn-text-muted)] text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                  Syntex Technologies (Pty) Ltd
                </p>
              </li>
              <li>
                <p className="text-[var(--syn-text-muted)] text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                  Windhoek, Namibia
                </p>
              </li>
              <li>
                <p className="text-[var(--syn-text-muted)] text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                  Est. 2008
                </p>
              </li>
            </ul>
          </div>

          <div>
            <p
              className="font-mono text-[0.5625rem] tracking-widest uppercase text-[var(--syn-text-faint)] mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Contact
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@syntexnam.com"
                  className="text-[var(--syn-text-muted)] text-sm hover:text-[var(--syn-text)] transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  info@syntexnam.com
                </a>
              </li>
              <li>
                <a
                  href="https://syntexnam.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--syn-text-muted)] text-sm hover:text-[var(--syn-text)] transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  syntexnam.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: copyright */}
        <div className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p
            className="font-mono text-[0.5rem] tracking-widest uppercase text-[var(--syn-text-faint)]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            © {new Date().getFullYear()} Syntex Technologies (Pty) Ltd · Windhoek · Namibia
          </p>
          <p
            className="font-mono text-[0.5rem] tracking-widest uppercase text-[var(--syn-text-faint)]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Synergy to Excel
          </p>
        </div>
      </div>
    </footer>
  );
}
