import React from "react";
import Board2 from "./Board2";
import Row2 from "./Board/Row2"
import Square from "./Board/Square";
import image from "./Piece/ImageMapper";

const initialSquares = "wR,wN,wB,wQ,wK,wB,wN,wR,wP,wP,wP,wP,wP,wP,wP,wP,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,bP,bP,bP,bP,bP,bP,bP,bP,bR,bN,bB,bQ,bK,bB,bN,bR";
const afterFirstMoveSquares = "wR,wN,wB,wQ,wK,wB,wN,wR,,wP,wP,wP,wP,wP,wP,wP,wP,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,bP,bP,bP,bP,bP,bP,bP,bP,bR,bN,bB,bQ,bK,bB,bN,bR";

export default class Game extends React.Component {
  constructor() {
    super();

    console.log(`Game`)
    let pieces = this.setPieces(initialSquares);

    this.state = {
      gamestate: {
        pieces: pieces,
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
    console.log(`Game.render()`);
    return (
        <div>
          {this.state.gamestate.toggle}
          <Board2 rows={this.rows()} handleClick={this.handleClick.bind(this)} gamestate={this.state.gamestate}/>
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

  rows() {
    console.log(`Game.rows()`);
    let rows = []
    for (let i = 7; i >= 0; i--) {
      rows.push(<Row2 handleClick={this.handleClick.bind(this)} squares={this.squares(i)} key={i} rowNum={i} gamestate={this.state.gamestate} />);
    }
    return rows;
  }

  squares(row) {
    console.log(`Game.squares()`);
    let s0 = row * 8;
    let squares = [];
    for (let i = 0; i < 8 ; i++) {
      let thisSquare = s0 + i;
      squares.push(<Square handleClick={this.handleClick.bind(this)} key={i} boardIndex={thisSquare} turn={this.state.gamestate.turn} piece={this.state.gamestate.pieces[thisSquare]} />)
    }
    return squares;
  }

}
