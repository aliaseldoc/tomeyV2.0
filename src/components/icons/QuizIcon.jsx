export function QuizIcon({ filled = false, className = '', ...props }) {
  if (filled) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="currentColor"
          d="M5 3.5h14A1.5 1.5 0 0 1 20.5 5v14a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V5A1.5 1.5 0 0 1 5 3.5Zm5.8 5.4c0-.9.8-1.5 1.7-1.5s1.7.5 1.7 1.4c0 1.2-1.7 1.3-1.7 2.7h-1.2c0-1.9 1.7-2 1.7-2.7 0-.4-.4-.6-.8-.6s-.7.2-.7.7Zm.9 4.9a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z"
        />
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
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M10.2 9.3c0-1 .8-1.7 1.8-1.7s1.8.6 1.8 1.5c0 1.3-1.8 1.4-1.8 2.9" />
      <circle cx="12" cy="15.3" r="0.15" fill="currentColor" stroke="none" />
    </svg>
  );
}
