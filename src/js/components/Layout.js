import React from "react";
import Board from "./Board";
import Header from "./Header";
// import img from "../../../images/Queen-B.png"
import img from "Images/Queen-B.png"
import Piece from "./Piece";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Chess!"
    };
  }

  render() {
    return (
      <div>
        <img src={img} />
        <img src={img} />
        <hr />
        <Piece name={"bR"} />
        <Header title={this.state.title} />
        <Board />
      </div>
    );
  }
}