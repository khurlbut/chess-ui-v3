import coords from "./Coordinator"

const WHITE = "white";
const BLACK = "black";
const CLICKABLE = {
  WHITE: "clickableWhite",
  BLACK: "clickableBlack"
}

function style(boardIndex, hasPiece = false) {
  let [col, row] = coords(boardIndex);
  let evenRow = ((row % 2) === 0);

  if (evenRow) {
    return squareStyle(col + 1, hasPiece);
  } else {
    return squareStyle(col, hasPiece);
  }
}

function squareStyle(col, hasPiece = false) {
  let evenCol = ((col % 2) === 0);

  if (evenCol) {
    if (hasPiece){
      return CLICKABLE.WHITE;
    }
    return WHITE;
  }
  if (hasPiece) {
    return CLICKABLE.BLACK;
  }
  return BLACK;
}

module.exports = (boardIndex, hasPiece) => style(boardIndex, hasPiece);

