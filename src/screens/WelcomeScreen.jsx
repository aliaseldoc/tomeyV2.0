import { useState } from 'react';
import { Logo } from '../components/Logo.jsx';
import { PersonIcon, ArrowForwardIcon, FavoriteIcon, LightbulbIcon } from '../components/icons/index.js';

export function WelcomeScreen({ onStart }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName) {
      setError('Ingresá tu nombre para comenzar.');
      return;
    }
    onStart(trimmedName);
  }

  function handleChange(event) {
    setName(event.target.value);
    if (error) setError('');
  }

  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-container-margin py-xl text-center md:px-lg">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
        <div className="h-96 w-96 rounded-full bg-primary-container mix-blend-screen blur-[120px]" />
        <div className="absolute h-80 w-80 -translate-y-32 translate-x-32 rounded-full bg-secondary-container mix-blend-screen blur-[100px]" />
      </div>

      <div className="relative z-10 mb-lg">
        <div className="absolute -inset-4 rounded-full bg-surface-container-highest opacity-50 blur-xl" />
        <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-pure-white/10 bg-surface-container-lowest shadow-[0_0_40px_rgba(92,216,218,0.2)] md:h-64 md:w-64">
          <Logo className="h-32 w-32 md:h-44 md:w-44" />
        </div>
      </div>

      <h1 className="relative z-10 mb-sm font-headline-xl text-headline-xl tracking-tight text-pure-white drop-shadow-md">
        El Desafío de Tomey
      </h1>
      <p className="relative z-10 mb-xl max-w-md font-body-lg text-body-lg text-on-surface-variant">
        Demuestra tu liderazgo en enfermería. Prepárate para el reto.
      </p>

      <div className="relative z-10 w-full max-w-sm overflow-hidden rounded-2xl border border-pure-white/10 bg-surface/80 p-md shadow-2xl backdrop-blur-md">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-medical to-gold-accent" />
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-lg">
          <div className="relative">
            <label className="sr-only" htmlFor="playerName">
              Ingresá tu nombre
            </label>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-sm text-primary">
              <PersonIcon className="h-5 w-5" />
            </div>
            <input
              id="playerName"
              name="playerName"
              type="text"
              maxLength={30}
              value={name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="glow-input w-full min-w-0 rounded-lg border-b-2 border-surface-container-highest bg-surface-container-low py-sm pl-xl pr-sm font-quiz-option text-quiz-option text-on-surface transition-all placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-0"
            />
          </div>
          {error && <p className="-mt-sm text-left font-body-md text-body-md text-danger-red">{error}</p>}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-sm rounded-xl bg-primary py-sm font-title-md text-title-md text-on-primary shadow-[0_0_20px_rgba(92,216,218,0.3)] transition-all hover:bg-primary-fixed-dim hover:shadow-[0_0_30px_rgba(92,216,218,0.5)] active:scale-95"
          >
            Comenzar Desafío
            <ArrowForwardIcon className="h-5 w-5" />
          </button>
        </form>
      </div>

      <div className="relative z-10 mt-lg flex gap-md opacity-50">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-pure-white/10 bg-surface-container-highest text-gold-accent shadow-lg">
          <FavoriteIcon className="h-5 w-5" />
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-pure-white/10 bg-surface-container-highest text-gold-accent shadow-lg">
          <LightbulbIcon className="h-5 w-5" />
        </div>
      </div>
    </main>
  );
}
