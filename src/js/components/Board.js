import React from "react";
import Row from "./Board/Row";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.rows()}
      </div>
    );
  }

  rows() {
    let rows = [];
    let gamestate = this.props.gamestate;
    let clickHandler = this.props.handleClick;

    for (let i = 7; i >= 0; i--) {
      rows.push(<Row handleClick={clickHandler} key={i} rowNum={i} gamestate={gamestate} />);
    }
    return rows;
  }
}