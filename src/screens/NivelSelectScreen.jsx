import { Logo } from '../components/Logo.jsx';
import { NivelCard } from '../components/nivel/NivelCard.jsx';
import { isNivelUnlocked } from '../utils/isNivelUnlocked.js';

export function NivelSelectScreen({ niveles, onSelectNivel }) {
  return (
    <main className="relative flex min-h-dvh flex-col items-center overflow-hidden px-container-margin pb-[100px] pt-[100px] text-center md:px-lg">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
        <div className="h-96 w-96 rounded-full bg-primary-container mix-blend-screen blur-[120px]" />
        <div className="absolute h-80 w-80 -translate-y-32 translate-x-32 rounded-full bg-secondary-container mix-blend-screen blur-[100px]" />
      </div>

      <div className="relative z-10 mb-md">
        <Logo className="h-16 w-16" />
      </div>

      <h1 className="relative z-10 mb-xs font-headline-lg-mobile text-headline-lg-mobile font-bold text-pure-white md:font-headline-lg md:text-headline-lg">
        Elegí tu nivel
      </h1>
      <p className="relative z-10 mb-lg max-w-md font-body-lg text-body-lg text-on-surface-variant">
        Cada nivel es un desafío completo de 15 preguntas. Se habilitan a medida que avanza el curso.
      </p>

      <div className="relative z-10 flex w-full max-w-xl flex-col gap-md">
        {niveles.map((nivel) => (
          <NivelCard
            key={nivel.id}
            nivel={nivel}
            isUnlocked={isNivelUnlocked(nivel)}
            onSelect={() => onSelectNivel(nivel)}
          />
        ))}
      </div>
    </main>
  );
}
