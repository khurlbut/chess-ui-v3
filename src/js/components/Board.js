import React from "react";
import Row from "./Board/Row";

let pieces = null;
let gameState = null;

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    gameState = props.gamestate;
    pieces = props.pieces;
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
      rows.push(<Row key={i} rowNum={i} gamestate={gameState} pieces={pieces} />);
    }
    return rows;
  }
}