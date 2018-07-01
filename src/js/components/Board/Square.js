import React from "react";
import style from "./Square/Style"

let i = null;
let p = null;
let g = null;

let hasPiece = null;
let isColorsTurn = null;

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.validateProps(props);

    i = props.boardIndex;
    p = props.piece;
    g = props.gamestate;

    hasPiece = this.hasPiece(p) ? true : false;
    isColorsTurn = this.isPieceColorsTurn(p, g) ? true : false;
  }

  render() {
    return (
        <div>
          <button className={style(i, hasPiece, isColorsTurn)} >
            <img src={p.image} className={'piece'} />
          </button>
        </div>
      );
  }

  hasPiece(p) {
    if (p.name !== null && p.name !== undefined && p.name.length > 0){
     return true;
    }
    return false;
  }

  isPieceColorsTurn(p, g) {
    if (!hasPiece) {
      return false;
    }

    let turnColor = g.turn;
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