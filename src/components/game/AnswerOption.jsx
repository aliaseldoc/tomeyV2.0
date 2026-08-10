const LETTERS = ['A', 'B', 'C', 'D'];

const VARIANT_CLASSES = {
  default: 'glass-panel glow-hover',
  correct: 'border-2 border-mint-surface bg-mint-surface/20 text-mint-surface animate-pulse',
  incorrect: 'border-2 border-danger-red bg-danger-red/20',
  muted: 'glass-panel opacity-40',
};

export function AnswerOption({ letterIndex, label, variant, disabled, onClick }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`group flex min-h-[9rem] items-center rounded-xl p-md text-left shadow-lg transition-all duration-300 ${VARIANT_CLASSES[variant]}`}
    >
      <span className="mr-md w-10 text-center font-headline-lg text-headline-lg font-bold text-primary">
        {LETTERS[letterIndex]}
      </span>
      <span className="font-quiz-option text-quiz-option text-on-surface transition-colors group-hover:text-pure-white">
        {label}
      </span>
    </button>
  );
}
