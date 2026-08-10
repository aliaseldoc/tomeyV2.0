export function EmojiEventsIcon({ className = '', ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path fill="currentColor" d="M7 3.5h10v5.5a5 5 0 0 1-10 0V3.5Z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        d="M7 5H4.8a1.8 1.8 0 0 0-1.8 1.8c0 2 1.6 3.6 3.6 3.7M17 5h2.2A1.8 1.8 0 0 1 21 6.8c0 2-1.6 3.6-3.6 3.7"
      />
      <rect x="11" y="14.5" width="2" height="3.5" fill="currentColor" />
      <rect x="7.5" y="18.5" width="9" height="2" rx="1" fill="currentColor" />
    </svg>
  );
}
