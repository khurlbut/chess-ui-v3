import React from "react";
import Row from "./Board/Row";

let pieces = null;

export default class Board extends React.Component {
  constructor(props) {
    super(props);
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
      rows.push(<Row key={i} rowNum={i} pieces={pieces} />);
    }
    return rows;
  }
}