import React, { Component } from "react";
import "./BoxForm.css";

export default class BoxForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "#000000",
      width: "1",
      height: "1",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let data = this.state;
    this.props.addBox(this.state);
    this.setState({
      color: "#000000",
      width: "1",
      height: "1",
    });
    console.log(data);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    return (
      <div id="formWrap">
        <form onSubmit={this.handleSubmit}>
          <input
            id="boxColor"
            name="color"
            type="color"
            value={this.state.color}
            placeholder="#000000"
            onChange={this.handleChange}
            required
          ></input>
          <div className="labelWrap">
            <label htmlFor="boxColor">Box Color</label>
          </div>

          <input
            id="boxWidth"
            name="width"
            type="text"
            pattern="[0-9]+"
            minLength="2"
            maxLength="4"
            value={this.state.width}
            placeholder="Box Width"
            onChange={this.handleChange}
            required
          ></input>
          <div className="labelWrap">
            <label htmlFor="boxWidth">Box Width</label>
          </div>

          <input
            id="boxHeight"
            name="height"
            type="text"
            pattern="[0-9]+"
            minLength="2"
            maxLength="4"
            value={this.state.height}
            placeholder="Box Height"
            onChange={this.handleChange}
            required
          ></input>
          <div className="labelWrap">
            <label htmlFor="boxHeight">Box Height</label>
          </div>

          <button>Add Box</button>
        </form>
      </div>
    );
  }
}
