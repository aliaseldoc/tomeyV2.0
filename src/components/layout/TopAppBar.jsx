import { Logo } from '../Logo.jsx';
import { AccountCircleIcon } from '../icons/index.js';

export function TopAppBar({ playerName }) {
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-pure-white/10 bg-surface-container-lowest/90 px-container-margin py-base shadow-md backdrop-blur-md">
      <Logo className="h-8 w-8" />
      <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold tracking-tight text-primary md:font-headline-lg md:text-headline-lg">
        El Desafío de Tomey
      </h1>
      <span
        className="flex items-center rounded-full p-xs text-on-surface-variant"
        title={playerName ? `Jugando como: ${playerName}` : undefined}
      >
        <AccountCircleIcon className="h-6 w-6" />
      </span>
    </header>
  );
}
