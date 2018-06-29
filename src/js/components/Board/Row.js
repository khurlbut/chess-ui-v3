import React from "react";
import Square from "./Square";

let s1 = 0;
let pieces = null;

export default class Row extends React.Component {
  constructor(props) {
    super(props);

    if (props.rowNum === undefined) {
      throw "attribute rowNum is required!";
    }
    if (props.rowNum < 0 || props.rowNum > (8 - 1)) {
      throw "rowNum must be between 0 and 7!"
    }

    s1 = props.rowNum * 8; // Square 1 in Row
    pieces = props.pieces;
  }

  render() {
    return (
      <div className="board-row">
        <Square boardIndex={s1 + 0} piece={pieces[s1 + 0]} />
        <Square boardIndex={s1 + 1} piece={pieces[s1 + 1]} />
        <Square boardIndex={s1 + 2} piece={pieces[s1 + 2]} />
        <Square boardIndex={s1 + 3} piece={pieces[s1 + 3]} />
        <Square boardIndex={s1 + 4} piece={pieces[s1 + 4]} />
        <Square boardIndex={s1 + 5} piece={pieces[s1 + 5]} />
        <Square boardIndex={s1 + 6} piece={pieces[s1 + 6]} />
        <Square boardIndex={s1 + 7} piece={pieces[s1 + 7]} />
      </div>
    );
  }
}