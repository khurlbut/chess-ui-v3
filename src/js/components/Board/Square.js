import React from "react";
import style from "./Square/Style"

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.validateProps(props);

    this.state = {
      handleClick: props.handleClick,
      index: props.boardIndex,
      isSelected: false,
    }
  }

  handleClick() {
    console.log(`Square.handleClick()`)
    this.setState({isSelected: true});
    this.props.handleClick(this.state.index);
  }

  render() {
    let index = this.state.index;
    let piece = this.props.piece;
    let image = piece.image;
    let hasPiece = this.hasPiece(piece);
    let isColorsTurn = this.state.isColorsTurn;
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

  isPieceColorsTurn() {
    if (!this.hasPiece()) {
      return false;
    }

    let turnColor = this.props.turn;
    let pieceColor = this.props.piece.name.charAt(0);

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