export default function cleanSet(sets, startString) {
  if (!startString) {
    return '';
  }
  const stringsArray = [];
  sets.forEach((word) => {
    if (word.startsWith(startString)) {
      stringsArray.push(word.substr(startString.length, word.length));
    }
  });
  return stringsArray.join('-');
}
