import React from "react";
import Square from "./Square";

export default class Row extends React.Component {
  constructor(props) {
    super(props);

    console.log(`Row.constructor()`);
    this.validate(props);

    this.state = {
      handleClick: props.handleClick,
      s0: props.rowNum * 8
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
    // console.log(`props.gamestate.pieces: ${JSON.stringify(this.props.gamestate.pieces)}`);
    return (
      <div className="board-row">
        {this.squares()}
      </div>
    );
  }

  squares() {
    console.log(`Row.squares()`);
    let squares = [];
    let turn = this.props.gamestate.turn;
    let pieces = this.props.gamestate.pieces;
    let clickHandler = this.handleClick.bind(this);

    for (let i = 0; i < 8 ; i++) {
      let thisSquare = this.state.s0 + i;
      let thisPiece = pieces[thisSquare];

      squares.push(<Square handleClick={clickHandler} key={thisSquare} boardIndex={thisSquare} turn={turn} piece={thisPiece} />)
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