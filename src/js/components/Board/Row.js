import React from "react";
import Square from "./Square";

export default class Row extends React.Component {
  constructor(props) {
    super(props);

    this.validate(props);

    this.state = {
      s0: props.rowNum * 8
    };
  }

  render() {
    return (
      <div className="board-row">
        {this.squares()}
      </div>
    );
  }

  squares() {
    let squares = [];
    let turn = this.props.gamestate.turn;
    let pieces = this.props.gamestate.pieces;
    let selectedSquare = this.props.gamestate.selectedSquare;
    let highlightedSquares = this.props.gamestate.moveToSquares;

    let clickHandler = this.props.handleClick;

    for (let i = 0; i < 8 ; i++) {
      let thisSquare = this.state.s0 + i;
      let thisPiece = pieces[thisSquare];
      let isSelected = (selectedSquare !== null && selectedSquare === thisSquare) ? true : false;
      let isHighlighted = (highlightedSquares != null && highlightedSquares.has(thisSquare.toString())) ? true : false;

      squares.push(<Square handleClick={clickHandler} key={thisSquare} boardIndex={thisSquare} turn={turn} piece={thisPiece} isSelected={isSelected} isHighlighted={isHighlighted}/>)
    }
    return squares;
  }

  validate(props) {
    if (props.rowNum === undefined) {
      throw "attribute rowNum is required!";
    }
    if (props.rowNum < 0 || props.rowNum > 7) {
      throw "rowNum must be between 0 and 7!"
    }
  }

}