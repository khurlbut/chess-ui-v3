import React from "react";
import Board from "./Board";
import image from "./Piece/ImageMapper";

const squares = "wR,wN,wB,wQ,wK,wB,wN,wR,wP,wP,wP,wP,wP,wP,wP,wP,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,bP,bP,bP,bP,bP,bP,bP,bP,bR,bN,bB,bQ,bK,bB,bN,bR";

let pieces = [];

export default class Game extends React.Component {
  constructor() {
    super();
    this.setPieces();
  }

  render() {
    return (
        <div>
          <Board pieces={pieces}/>
        </div>
    );
  }

  setPieces() {
    let squareArray = squares.split(',');
    for (let i = 0; i < squareArray.length; i++) {
      let piece = {};
      piece.name = squareArray[i];
      piece.image = image(piece.name);
      pieces[i] = piece;
    }
  }
}
