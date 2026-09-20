interface SectionLabelProps {
  number?: string;
  text: string;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({ number, text, light = false, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {number && (
        <span
          className={`font-mono text-[0.625rem] tracking-widest ${light ? 'text-white/40' : 'text-[var(--syn-text-faint)]'}`}
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {number}
        </span>
      )}
      <span
        className={`font-mono text-[0.6875rem] tracking-[0.15em] uppercase ${light ? 'text-[var(--syn-dark-text-muted)]' : 'text-[var(--syn-text-muted)]'}`}
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        {text}
      </span>
    </div>
  );
}
