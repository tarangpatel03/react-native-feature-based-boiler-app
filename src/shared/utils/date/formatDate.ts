export const formatDate = (
  date: string | number | Date,
  options?: Intl.DateTimeFormatOptions,
) => {
  try {
    const d = new Date(date);

    if (isNaN(d.getTime())) return '';

    return new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      ...options,
    }).format(d);
  } catch {
    return '';
  }
};
