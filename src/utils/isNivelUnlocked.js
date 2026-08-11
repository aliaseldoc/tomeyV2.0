export function isNivelUnlocked(nivel) {
  if (!nivel.unlockDate) return false;
  const [year, month, day] = nivel.unlockDate.split('-').map(Number);
  const unlockMoment = new Date(year, month - 1, day); // medianoche en la hora local del dispositivo
  return new Date() >= unlockMoment;
}
