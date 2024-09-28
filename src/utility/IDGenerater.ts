function generateTPEdate(): Date {
  const timestampUTC = Date.now();
  const timestampTPE = timestampUTC + 8 * 3600 * 1000;
  const tpedate = new Date(timestampTPE);
  return tpedate;
}

export default function generateID(prefix: string): string {
  const tpedate = generateTPEdate();
  const timeNumber = tpedate
    .toISOString()
    .replace(/[-T:.Z]/g, '')
    .padEnd(17, '0');
  const randomNumber = Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, '0');

  return prefix + timeNumber + randomNumber;
}
