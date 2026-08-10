export function MenuBookIcon({ className = '', ...props }) {
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
      <path d="M12 6.5c-1.6-1-3.6-1.5-5.5-1.5-1 0-2 .1-3 .4v13c1-.3 2-.4 3-.4 1.9 0 3.9.5 5.5 1.5" />
      <path d="M12 6.5c1.6-1 3.6-1.5 5.5-1.5 1 0 2 .1 3 .4v13c-1-.3-2-.4-3-.4-1.9 0-3.9.5-5.5 1.5V6.5Z" />
    </svg>
  );
}
