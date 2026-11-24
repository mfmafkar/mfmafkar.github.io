export function getTenure(startDate: string): string {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const plural = (n: number, unit: string) => `${n} ${unit}${n === 1 ? '' : 's'}`;
  const duration =
    years === 0
      ? plural(months, 'month')
      : months === 0
        ? plural(years, 'year')
        : `${plural(years, 'year')} and ${plural(months, 'month')}`;

  return `${start.toLocaleString('default', {
    month: 'long',
  })} ${start.getFullYear()} to Present (${duration})`;
}
