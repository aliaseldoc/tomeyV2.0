export function LifelineButton({ title, disabled, onClick, children }) {
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      disabled={disabled}
      onClick={onClick}
      className="lifeline-button flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold-accent/50 bg-surface-container text-gold-accent transition-all disabled:cursor-not-allowed disabled:opacity-30"
    >
      {children}
    </button>
  );
}
