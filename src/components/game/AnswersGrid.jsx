import { AnswerOption } from './AnswerOption.jsx';

function getVariant(index, { selectedOptionIndex, correctIndex, isAnswerRevealed }) {
  if (!isAnswerRevealed) return 'default';
  if (index === correctIndex) return 'correct';
  if (index === selectedOptionIndex) return 'incorrect';
  return 'muted';
}

export function AnswersGrid({
  options,
  correctIndex,
  selectedOptionIndex,
  isAnswerRevealed,
  hiddenOptionIndices,
  onSelect,
}) {
  return (
    <div className="grid grid-cols-1 gap-md md:grid-cols-2">
      {options.map((label, index) => {
        if (hiddenOptionIndices.includes(index)) return null;
        return (
          <AnswerOption
            key={index}
            letterIndex={index}
            label={label}
            variant={getVariant(index, { selectedOptionIndex, correctIndex, isAnswerRevealed })}
            disabled={isAnswerRevealed}
            onClick={() => onSelect(index)}
          />
        );
      })}
    </div>
  );
}
