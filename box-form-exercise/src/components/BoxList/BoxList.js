import React, { Component } from "react";
import Box from "../Box/Box";
import BoxForm from "../BoxForm/BoxForm";
import "./BoxList.css";

export default class BoxList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boxes: [{ color: "black", width: "50", height: "50" }],
    };

    this.removeBox = this.removeBox.bind(this);
    this.addBox = this.addBox.bind(this);
  }

  removeBox(id) {
    console.log(`Removing box ${id}`);
    this.setState((prevState) => {
      return {
        boxes: prevState.boxes.filter((_, i) => i !== id),
      };
    });
  }

  addBox(newBox) {
    this.setState((prevState) => {
      return {
        boxes: [...prevState.boxes, newBox],
      };
    });
  }

  render() {
    return (
      <div>
        <BoxForm addBox={this.addBox}></BoxForm>
        <ul id="boxList">
          {this.state.boxes.map((e, i) => {
            return (
              <li>
                <Box
                  key={i}
                  build={e}
                  boxId={i}
                  removeBox={this.removeBox}
                ></Box>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
