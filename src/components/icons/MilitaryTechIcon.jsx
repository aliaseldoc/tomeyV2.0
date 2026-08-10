export function MilitaryTechIcon({ className = '', ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path fill="currentColor" opacity="0.55" d="M8 2.5h3.2L9 10 6 8.3Zm7.9 0H12.7L11 8.3l3 1.7Z" />
      <circle cx="12" cy="14.5" r="6.5" fill="currentColor" />
      <circle cx="12" cy="14.5" r="4.3" fill="none" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
    </svg>
  );
}
