import React from "react";
import Row from "./Board/Row";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieces: props.pieces,
      turn: props.turn,
      selectedSquare: props.selectedSquare
    };
  }

  render() {
    return (
      <div>
        {this.rows()}
      </div>
    );
  }

  rows() {
    let rows = []
    for (let i = 7; i >= 0; i--) {
      rows.push(<Row key={i} rowNum={i} turn={this.state.turn} selectedSquare={this.state.selectedSquare} pieces={this.state.pieces} />);
    }
    return rows;
  }
}