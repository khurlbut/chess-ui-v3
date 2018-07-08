import React from "react";
import Row from "./Board/Row";

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      handleClick: props.handleClick
    };
  }

  handleClick(selectedSquare) {
    console.log(`Board.handleClick() selectedSquare: ${selectedSquare}`);
    this.props.handleClick(selectedSquare);
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
    console.log(`Board.rows gamestate.turn: ${gamestate.turn}`)
    let clickHandler = this.handleClick.bind(this);

    for (let i = 7; i >= 0; i--) {
      rows.push(<Row handleClick={clickHandler} key={i} rowNum={i} gamestate={gamestate} />);
    }
    return rows;
  }
}