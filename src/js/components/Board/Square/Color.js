import coords from "./Coordinator"

const WHITE = "white";
const BLACK = "black";

function color(boardIndex) {
  let [col, row] = coords(boardIndex);
  let evenRow = ((row % 2) === 0);

  if (evenRow) {
    return squareColor(col + 1);
  } else {
    return squareColor(col);
  }
}

function squareColor(col) {
  let evenCol = ((col % 2) === 0);

  if (evenCol) {
    return WHITE;
  }
  return BLACK;
}

module.exports = (boardIndex) => color(boardIndex);

