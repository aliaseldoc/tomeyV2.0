export function QuestionCard({ category, question }) {
  return (
    <div className="relative mb-lg flex min-h-[16rem] flex-col justify-center overflow-hidden rounded-2xl border border-white/10 bg-surface-container-low/90 p-lg text-center shadow-2xl backdrop-blur-xl">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary via-gold-accent to-primary" />
      <p className="mb-sm font-label-caps text-label-caps uppercase tracking-widest text-primary opacity-80">{category}</p>
      <h2 className="py-xs font-title-md text-title-md leading-relaxed text-pure-white">{question}</h2>
    </div>
  );
}
