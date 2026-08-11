export function isNivelUnlocked(nivel) {
  if (!nivel.unlockDate) return false;
  return new Date() >= new Date(nivel.unlockDate);
}
