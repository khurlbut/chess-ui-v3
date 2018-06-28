import React from "react";
import Row from "./Board/Row";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Row rowNum={7}/>
        <Row rowNum={6}/>
        <Row rowNum={5}/>
        <Row rowNum={4}/>
        <Row rowNum={3}/>
        <Row rowNum={2}/>
        <Row rowNum={1}/>
        <Row rowNum={0}/>
      </div>
    );
  }
}