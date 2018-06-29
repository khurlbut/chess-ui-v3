import React from "react";
import imageMapper from "./Piece/ImageMapper";
import color from "./Board/Square/Color";

let style="piece";

export default class Piece extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.image = imageMapper(props.name);
  }

  getName() {
    return this.name;
  }

  getImage() {
    return this.image;
  }

  render() {
    return( <img src={this.image} className={style} /> )
  }
}