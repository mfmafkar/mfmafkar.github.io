export function getTenure(startDate: string): string {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return `${start.toLocaleString('default', {
    month: 'long',
  })} ${start.getFullYear()} to Present (${years} years and ${months} months)`;
}
