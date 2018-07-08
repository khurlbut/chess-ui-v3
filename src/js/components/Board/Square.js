import React from "react";
import style from "./Square/Style"

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.validateProps(props);

    this.state = {
      index: props.boardIndex,
    }
  }

  handleClick() {
    this.props.handleClick(this.state.index);
  }

  render() {
    let index = this.state.index;
    let piece = this.props.piece;
    let turn = this.props.turn;

    let image = piece.image;
    let hasPiece = this.hasPiece(piece);
    let isColorsTurn = this.isPieceColorsTurn(piece, turn);
    let squareStyle = style(index, hasPiece, isColorsTurn);

    let clickHandler = this.handleClick.bind(this);

    return (
        <div>
          <button onClick={clickHandler} className={squareStyle} >
            <img src={image} className={'piece'} />
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

  isPieceColorsTurn(p, turnColor) {
    if (!this.hasPiece(p)) {
      return false;
    }
    let pieceColor = p.name.charAt(0);

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