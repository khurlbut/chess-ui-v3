import React from "react";
import Square from "./Square";

let s0 = 0;
let pieces = null;

export default class Row extends React.Component {
  constructor(props) {
    super(props);

    this.validate(props);

    s0 = props.rowNum * 8; // Square 0 in Row
    pieces = props.pieces;
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
    for (let i = 0; i < 8 ; i++) {
      let thisSquare = s0 + i;
      squares.push(<Square key={i} boardIndex={thisSquare} piece={pieces[ thisSquare ]} />)
    }
    return squares;
  }

  validate(props) {
    if (props.rowNum === undefined) {
      throw "attribute rowNum is required!";
    }
    if (props.rowNum < 0 || props.rowNum > (8 - 1)) {
      throw "rowNum must be between 0 and 7!"
    }
  }

}