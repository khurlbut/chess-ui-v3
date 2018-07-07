import React from "react";
import Board from "./Board";
import image from "./Piece/ImageMapper";

const initialSquares = "wR,wN,wB,wQ,wK,wB,wN,wR,wP,wP,wP,wP,wP,wP,wP,wP,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,bP,bP,bP,bP,bP,bP,bP,bP,bR,bN,bB,bQ,bK,bB,bN,bR";

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      pieces: this.setPieces(initialSquares),
      turn: "w",
      selectedSquare: null
    }
  }

  render() {
    return (
        <div>
          <Board turn={this.state.turn} selectedSquare={this.state.selectedSquare} pieces={this.state.pieces}/>
        </div>
    );
  }

  setPieces(squares) {
    let pieces = [];
    let squareArray = squares.split(',');
    for (let i = 0; i < squareArray.length; i++) {
      let piece = {};
      piece.name = squareArray[i];
      piece.image = image(piece.name);
      pieces[i] = piece;
    }
    return pieces;
  }
}
