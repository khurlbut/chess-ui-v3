import React from "react";
import Board from "./Board";
import Header from "./Header";

const pieces = "wR,wN,wB,wQ,wK,wB,wN,wR,wP,wP,wP,wP,wP,wP,wP,wP,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,bP,bP,bP,bP,bP,bP,bP,bP,bR,bN,bB,bQ,bK,bB,bN,bR";

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
        <hr />
        <Header title={this.state.title} />
        <Board pieces={pieces}/>
      </div>
    );
  }
}