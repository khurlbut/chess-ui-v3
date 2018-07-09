import React from "react";
import Board from "./Board";
import image from "./Piece/ImageMapper";

const initialSquares = "wR,wN,wB,wQ,wK,wB,wN,wR,wP,wP,wP,wP,wP,wP,wP,wP,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,bP,bP,bP,bP,bP,bP,bP,bP,bR,bN,bB,bQ,bK,bB,bN,bR";
const squaresAfterA2movedToA3 = "wR,wN,wB,wQ,wK,wB,wN,wR,,wP,wP,wP,wP,wP,wP,wP,wP,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,bP,bP,bP,bP,bP,bP,bP,bP,bR,bN,bB,bQ,bK,bB,bN,bR";
const moveToSquaresForA2 = "16,24";

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      errormessage: "",
      gamestate: {
        pieces: this.setPieces(initialSquares),
        turn: "w",
        selectedSquare: null,
        moveToSquares: null
      }
    }
  }

  handleClick(selectedSquare) {
    let errormessage = "";
    let pieces = this.state.gamestate.pieces;
    let previousSelectedSquare = this.state.gamestate.selectedSquare;
    let moveToSquares = null;

    if (previousSelectedSquare !== null) {

      if (previousSelectedSquare !== selectedSquare) {
        let result = this.attemptMove(previousSelectedSquare, selectedSquare);
        if (result.success) {
          pieces = result.pieces;
        } else {
          errormessage = result.errorMessage;
        }
      }

      selectedSquare = null;

    } else {
      moveToSquares = this.findMoveToSquares(selectedSquare);
    }

    this.setState({
      errormessage: errormessage,
      gamestate: {
        pieces : pieces,
        turn: "w",
        selectedSquare: selectedSquare,
        moveToSquares: moveToSquares
      }
    });
  }

  attemptMove(from, to) {
    if (from === 8 && to === 16) {
      return {success: true, pieces: this.setPieces(squaresAfterA2movedToA3)};
    }
    return {success: false, errorMessage: "That is not a valid move..."};
  }

  findMoveToSquares(from) {
    if (from === 8) {
      return new Set(moveToSquaresForA2.split(','));
    }
    return new Set();
  }

  render() {
    return (
        <div>
          <Board handleClick={this.handleClick.bind(this)} gamestate={this.state.gamestate}/>
          <div>{this.state.errormessage}</div>
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
