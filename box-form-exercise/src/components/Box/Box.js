import React, { Component } from "react";
import "./Box.css";

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    console.log("removing button...");
    this.props.removeBox(this.props.boxId);
  }

  render() {
    return (
      <div
        className="box"
        style={{
          backgroundColor: this.props.build.color,
          width: this.props.build.width + "px",
          height: this.props.build.height + "px",
        }}
      >
        <div className="boxRemoveButton">
          <button type="button" onClick={this.handleRemove}>
            X
          </button>
        </div>
      </div>
    );
  }
}
