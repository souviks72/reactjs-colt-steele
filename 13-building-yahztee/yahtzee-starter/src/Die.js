import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(){
    super();
    this.handleDieClick = this.handleDieClick.bind(this);
  }

  handleDieClick(e){
    this.props.handleClick(this.props.idx)
  }

  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleDieClick}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
