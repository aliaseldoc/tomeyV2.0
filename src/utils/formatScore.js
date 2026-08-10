const formatter = new Intl.NumberFormat('es-ES');

export function formatScore(score) {
  return formatter.format(score);
}
