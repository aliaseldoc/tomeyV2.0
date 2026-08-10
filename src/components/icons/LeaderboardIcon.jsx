export function LeaderboardIcon({ filled = false, className = '', ...props }) {
  if (filled) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
        <rect x="3.5" y="13" width="4.5" height="7.5" rx="1" />
        <rect x="9.75" y="8" width="4.5" height="12.5" rx="1" />
        <rect x="16" y="3.5" width="4.5" height="17" rx="1" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect x="3.5" y="13" width="4.5" height="7.5" rx="1" />
      <rect x="9.75" y="8" width="4.5" height="12.5" rx="1" />
      <rect x="16" y="3.5" width="4.5" height="17" rx="1" />
    </svg>
  );
}
