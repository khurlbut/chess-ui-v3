import React from "react";
import Game from "./Game";
import Header from "./Header";

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
        <Game />
      </div>
    );
  }
}