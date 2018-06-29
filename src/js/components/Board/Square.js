import React from "react";
import color from "./Square/Color"
import label from "./Square/Label";
import Piece from "../Piece";
import imageMapper from "../Piece/ImageMapper";

let i = null;
let p = 'wP';

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.validateProps(props);
    i = props.boardIndex;
  }

  render() {
    return (
        <div>
          <button className={color(i)} >
            {/*<Piece name={p} />*/}
            {/*{label(i)}*/}
            <img src={imageMapper(p)} className={'piece'} />
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