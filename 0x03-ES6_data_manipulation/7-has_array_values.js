export default function hasValuesFromArray(sets, array) {
  for (const values of array) {
    if (!sets.has(values)) {
      return false;
    }
  }
  return true;
}
