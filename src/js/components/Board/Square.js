import React from "react";
import color from "./Square/Color"
import image from "../Piece/ImageMapper";

let i = null;
let p = null;

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.validateProps(props);
    i = props.boardIndex;
    p = props.piece;
  }

  render() {
    return (
        <div>
          <button className={color(i)} >
            <img src={image(p)} className={'piece'} />
          </button>
        </div>
      );
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