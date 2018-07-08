import React from "react";
import Square from "./Square";

export default class Row2 extends React.Component {
  constructor(props) {
    super(props);

    this.validate(props);
    this.state = {
      squares: props.squares,
      handleClick: props.handleClick,
      s0: props.rowNum * 8,
      pieces: props.gamestate.pieces,
      turn: props.gamestate.turn,
      selectedSquare: props.gamestate.selectedSquare
    };

    // console.log(`pieces: ${JSON.stringify(this.state.pieces)}`)
  }

  render() {
    console.log(`Row2.render()`)
    return (
      <div className="board-row">
        {this.state.squares}
      </div>
    );
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