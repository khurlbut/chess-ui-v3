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

  handleClick(selectedSquare) {
    console.log(`Board.handleClick() selectedSquare: ${selectedSquare}`);
    this.setState({
      gamestate: {
        selectedSquare: selectedSquare
      }
    });
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
    let rows = []
    for (let i = 7; i >= 0; i--) {
      rows.push(<Row handleClick={this.handleClick.bind(this)} key={i} rowNum={i} gamestate={this.props.gamestate} />);
    }
    return rows;
  }
}