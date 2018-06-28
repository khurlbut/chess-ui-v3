import React from "react";
import Board from "./Board";
import Header from "./Header";
// import Piece from "./Piece";

// let p = new Piece('bQ');

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Chess!"
    };
  }

  render() {
    // console.log(p.getName());
    return (
      <div>
        <Header title={this.state.title} />
        <Board />
      </div>
    );
  }
}