import coords from "./Coordinator"

const WHITE = "white";
const BLACK = "black";
const CLICKABLE = {
  white: "clickableWhite",
  black: "clickableBlack"
}

function style(isSelected, boardIndex, hasPiece, isColorsTurn) {
  if (isSelected) {
    return "highlighted";
  }

  let [col, row] = coords(boardIndex);
  let evenRow = ((row % 2) === 0);

  if (evenRow) {
    return squareStyle(col + 1, hasPiece, isColorsTurn);
  } else {
    return squareStyle(col, hasPiece, isColorsTurn);
  }
}

function squareStyle(col, hasPiece, isColorsTurn) {
  let evenCol = ((col % 2) === 0);
  let squareColor = BLACK;

  if (evenCol) {
    squareColor = WHITE;
  }

  if (hasPiece && isColorsTurn){
    return CLICKABLE[squareColor];
  }
  return squareColor;
}

module.exports = (isSelected, boardIndex, hasPiece, isColorsTurn) => style(isSelected, boardIndex, hasPiece, isColorsTurn);

