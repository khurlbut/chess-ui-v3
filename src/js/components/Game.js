import React from "react";
import Board from "./Board";
import image from "./Piece/ImageMapper";

const initialSquares = "wR,wN,wB,wQ,wK,wB,wN,wR,wP,wP,wP,wP,wP,wP,wP,wP,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,bP,bP,bP,bP,bP,bP,bP,bP,bR,bN,bB,bQ,bK,bB,bN,bR";
const afterFirstMoveSquares = "wR,wN,wB,wQ,wK,wB,wN,wR,,wP,wP,wP,wP,wP,wP,wP,wP,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,bP,bP,bP,bP,bP,bP,bP,bP,bR,bN,bB,bQ,bK,bB,bN,bR";

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      gamestate: {
        pieces: this.setPieces(initialSquares),
        turn: "w",
        selectedSquare: null
      }
    }
  }

  handleClick(selectedSquare) {
    console.log(`something clicked!`);

    let previousSelectedSquare = this.state.gamestate.selectedSquare;
    if (previousSelectedSquare !== null) {
      if (previousSelectedSquare !== selectedSquare) {
        console.log(`Trying to move from ${previousSelectedSquare} to ${selectedSquare}`);
        selectedSquare = previousSelectedSquare;
      } else {
        selectedSquare = null;
      }
    }

    this.setState({
      gamestate: {
        pieces : this.setPieces(afterFirstMoveSquares),
        turn: "w",
        selectedSquare: selectedSquare
      }
    });
  }

  render() {
    return (
        <div>
          <Board handleClick={this.handleClick.bind(this)} gamestate={this.state.gamestate}/>
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
