const columns = 8;

function coordinates(boardIndex) {
  let rowNum = Math.trunc((boardIndex / columns));
  let colNum = boardIndex % columns;

  return [colNum, rowNum];
}

module.exports = (boardIndex) => coordinates(boardIndex);