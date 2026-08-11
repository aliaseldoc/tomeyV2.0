const formatter = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

export function formatDate(isoDateString) {
  const [year, month, day] = isoDateString.split('-').map(Number);
  return formatter.format(new Date(year, month - 1, day));
}
