import React from "react";
import Row from "./Board/Row";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handleClick: props.handleClick,
      gamestate: props.gamestate
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
      rows.push(<Row handleClick={this.state.handleClick} key={i} rowNum={i} gamestate={this.state.gamestate} />);
    }
    return rows;
  }
}