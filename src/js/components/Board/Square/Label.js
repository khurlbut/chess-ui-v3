import coords from "./Coordinator"

const COLUMNS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function label(boardIndex) {
  let [col, row] = coords(boardIndex);
  return COLUMNS[col] + (row + 1);
}

module.exports = (boardIndex) => label(boardIndex);
