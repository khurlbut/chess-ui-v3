import React from "react";
import Square from "./Square";

const COLUMNS = 8;

let rowNum = null;

export default class Row extends React.Component {
  constructor(props) {
    super(props);

    if (props.rowNum === undefined) {
      throw "attribute rowNum is required!";
    }
    if (props.rowNum < 0 || props.rowNum > (COLUMNS - 1)) {
      throw "rowNum must be between 0 and 7!"
    }

    rowNum = props.rowNum;
  }

  render() {
    return (
      <div className="board-row">
        <Square boardIndex={(rowNum * COLUMNS) + 0} columns={COLUMNS} />
        <Square boardIndex={(rowNum * COLUMNS) + 1} columns={COLUMNS} />
        <Square boardIndex={(rowNum * COLUMNS) + 2} columns={COLUMNS} />
        <Square boardIndex={(rowNum * COLUMNS) + 3} columns={COLUMNS} />
        <Square boardIndex={(rowNum * COLUMNS) + 4} columns={COLUMNS} />
        <Square boardIndex={(rowNum * COLUMNS) + 5} columns={COLUMNS} />
        <Square boardIndex={(rowNum * COLUMNS) + 6} columns={COLUMNS} />
        <Square boardIndex={(rowNum * COLUMNS) + 7} columns={COLUMNS} />
      </div>
    );
  }
}