import React from "react";
import style from "./Square/Style"

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.validateProps(props);

    this.state = {
      handleClick: props.handleClick,
      index: props.boardIndex,
      piece: props.piece,
      turn: props.turn,
      hasPiece:this.hasPiece(props.piece) ? true : false,
      isColorsTurn: this.isPieceColorsTurn()
    }

    if (this.state.index === 8) {
      console.log(`Square 8`)
    }
  }

  handleClick() {
    this.props.handleClick();
  }

  render() {
    return (
        <div>
          <button onClick={this.handleClick.bind(this)} className={style(this.state.index, this.state.hasPiece, this.state.isColorsTurn)} >
            <img src={this.state.piece.image} className={'piece'} />
          </button>
        </div>
      );
  }

  hasPiece(p) {
    if (p != undefined && p.name !== null && p.name !== undefined && p.name.length > 0){
     return true;
    }
    return false;
  }

  isPieceColorsTurn() {
    if (!this.hasPiece()) {
      return false;
    }

    let turnColor = this.state.turn;
    let pieceColor = this.state.piece.name.charAt(0);

    return turnColor == pieceColor;
  }
  validateProps(props) {
    if (props.boardIndex === undefined) {
      throw "attribute boardIndex is required!";
    }
    if (props.boardIndex < 0 || props.boardIndex > 63) {
      throw "booardIndex must be between 0 and 63!";
    }
  }

}