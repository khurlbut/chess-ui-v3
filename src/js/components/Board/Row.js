import React from "react";
import Square from "./Square";

let s0 = 0;
let pieces = null;

export default class Row extends React.Component {
  constructor(props) {
    super(props);

    validate(props);

    s0 = props.rowNum * 8; // Square 0 in Row
    pieces = props.pieces;
  }

  render() {
    return (
      <div className="board-row">
        <Square boardIndex={s0 + 0} piece={pieces[s0 + 0]} />
        <Square boardIndex={s0 + 1} piece={pieces[s0 + 1]} />
        <Square boardIndex={s0 + 2} piece={pieces[s0 + 2]} />
        <Square boardIndex={s0 + 3} piece={pieces[s0 + 3]} />
        <Square boardIndex={s0 + 4} piece={pieces[s0 + 4]} />
        <Square boardIndex={s0 + 5} piece={pieces[s0 + 5]} />
        <Square boardIndex={s0 + 6} piece={pieces[s0 + 6]} />
        <Square boardIndex={s0 + 7} piece={pieces[s0 + 7]} />
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