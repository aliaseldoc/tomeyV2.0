export function HomeIcon({ filled = false, className = '', ...props }) {
  if (filled) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
        <path d="M12 2.8 2.5 10.5V21a1 1 0 0 0 1 1H9v-7h6v7h5.5a1 1 0 0 0 1-1V10.5Z" />
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
      <path d="M3.5 10.5 12 3.5l8.5 7" />
      <path d="M5.5 9.5V21h13V9.5" />
      <path d="M9.5 21v-7h5v7" />
    </svg>
  );
}
