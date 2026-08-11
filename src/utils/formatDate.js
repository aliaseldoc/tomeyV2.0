const formatter = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

export function formatDate(isoDateString) {
  return formatter.format(new Date(isoDateString));
}
