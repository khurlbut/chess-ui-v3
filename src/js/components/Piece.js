import React from "react";
import imageMapper from "./Piece/ImageMapper";

export default class Piece {
  constructor(name) {
    this.name = name;
    this.image = imageMapper(name);
  }

  getName() {
    return this.name;
  }

  getImage() {
    return this.image;
  }
}