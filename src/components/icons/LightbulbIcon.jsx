export function LightbulbIcon({ className = '', ...props }) {
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
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a6.5 6.5 0 0 0-4 11.6c.6.5 1 1.3 1 2.1V16h6v-.3c0-.8.4-1.6 1-2.1A6.5 6.5 0 0 0 12 2Z" />
    </svg>
  );
}
