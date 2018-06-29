import React from "react";
import Row from "./Board/Row";

let pieces = null;

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    pieces = props.pieces.split(',');
  }

  render() {
    return (
      <div>
        <Row rowNum={7} pieces={pieces} />
        <Row rowNum={6} pieces={pieces} />
        <Row rowNum={5} pieces={pieces} />
        <Row rowNum={4} pieces={pieces} />
        <Row rowNum={3} pieces={pieces} />
        <Row rowNum={2} pieces={pieces} />
        <Row rowNum={1} pieces={pieces} />
        <Row rowNum={0} pieces={pieces} />
      </div>
    );
  }
}