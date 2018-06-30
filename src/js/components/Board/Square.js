import React from "react";
import style from "./Square/Style"

let i = null;
let p = null;
let hasPiece = null;

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.validateProps(props);

    i = props.boardIndex;
    p = props.piece;
    hasPiece = this.hasPiece(p) ? true : false;
  }

  render() {
    return (
        <div>
          <button className={style(i, hasPiece)} >
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

  validateProps(props) {
    if (props.boardIndex === undefined) {
      throw "attribute boardIndex is required!";
    }
    if (props.boardIndex < 0 || props.boardIndex > 63) {
      throw "booardIndex must be between 0 and 63!";
    }
  }

}