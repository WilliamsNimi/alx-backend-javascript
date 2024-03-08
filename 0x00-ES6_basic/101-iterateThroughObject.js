export default function iterateThroughObject(reportWithIterator) {
  let stringify = '';
  let count = 0;
  for (const names of reportWithIterator) {
    count += 1;
    stringify += names;
    if (count < (reportWithIterator.length)) {
      stringify = `${stringify} | `;
    }
  }
  return stringify;
}
