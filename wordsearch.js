
const wordSearch = (letters, word) => {
  let count = 0;
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      count += 1;
    }
  }

  const outerColumn = [];
  for (let i = 0; i < letters.length; i++) {
    const column = [];
    for (let j = 0; j < letters.length; j++) {
      column.push(letters[j][i]);
    }
    outerColumn.push(column.join(''));
  }

  if (outerColumn.includes(word)) {
    count += 1;
  }

  if (count > 0) {
    return true;
  } else {
    return false;
  }
}

const result = wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'FRANK')
module.exports = wordSearch;