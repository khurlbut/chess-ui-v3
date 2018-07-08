import React from "react";
import Row from "./Board/Row";

export default class Board2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: props.rows,
      handleClick: props.handleClick,
      gamestate: props.gamestate
    };
  }

  render() {
    console.log(`Board2.render()`);
    return (
      <div>
        {this.state.rows}
      </div>
    );
  }

}