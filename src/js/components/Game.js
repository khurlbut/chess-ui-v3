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
        toggle: 0,
        pieces: this.setPieces(initialSquares),
        turn: "w",
        selectedSquare: null
      }
    }
  }

  handleClick() {
    console.log(`something clicked!`);
    this.setState({
      gamestate: {
        toggle: 1,
        pieces : this.setPieces(afterFirstMoveSquares)
      }
    });
    // console.log(`this.state.gamestate.toggle: ${this.state.gamestate.toggle}`)
    // console.log(`this.state.gamestate.pieces: ${JSON.stringify(this.state.gamestate.pieces)}`);
  }

  render() {
    return (
        <div>
          {this.state.gamestate.toggle}
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
