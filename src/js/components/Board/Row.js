import React from "react";
import Square from "./Square";

export default class Row extends React.Component {
  constructor(props) {
    super(props);

    console.log(`Row.constructor()`);
    this.validate(props);
    this.state = {
      handleClick: props.handleClick,
      s0: props.rowNum * 8,
      pieces: props.gamestate.pieces,
      turn: props.gamestate.turn,
      selectedSquare: props.gamestate.selectedSquare
    };

    // console.log(`pieces: ${JSON.stringify(this.state.pieces)}`)
  }

  handleClick(selectedSquare) {
    console.log(`Row.handleClick() selectedSquare: ${selectedSquare}`);
    this.setState({selectedSquare: selectedSquare});
    this.props.handleClick(selectedSquare);
  }

  render() {
    console.log(`Row.render()`);
    console.log(`props.gamestate.pieces: ${JSON.stringify(this.props.gamestate.pieces)}`);
    return (
      <div className="board-row">
        {this.squares()}
      </div>
    );
  }

  squares() {
    console.log(`Row.squares()`);
    let squares = [];
    for (let i = 0; i < 8 ; i++) {
      let thisSquare = this.state.s0 + i;
      squares.push(<Square handleClick={this.handleClick.bind(this)} key={i} boardIndex={thisSquare} turn={this.state.turn} piece={this.props.gamestate.pieces[thisSquare]} />)
    }
    return squares;
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