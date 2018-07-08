import React from "react";
import style from "./Square/Style"

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.validateProps(props);

    this.state = {
      handleClick: props.handleClick,
      index: props.boardIndex,
    }
  }

  handleClick() {
    let piece = this.props.piece;
    let turn = this.props.turn;
    console.log(`Square.handleClick() piece: ${JSON.stringify(piece)}`);
    console.log(`Square.handleClick() hasPiece: ${this.hasPiece(piece)}`);
    console.log(`Square.handleClick() isColorsTurn: ${this.isPieceColorsTurn(piece, turn)}`);
    this.props.handleClick(this.state.index);
  }

  render() {
    let index = this.state.index;
    let piece = this.props.piece;
    let turn = this.props.turn;

    let image = piece.image;
    let hasPiece = this.hasPiece(piece);
    let isColorsTurn = this.isPieceColorsTurn(piece, turn);
    let clickHandler = this.handleClick.bind(this);
    let squareStyle = style(index, hasPiece, isColorsTurn);

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