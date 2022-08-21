import React, { Component } from "react";

export default class FormThing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //one handler to update form information for any given field in the form... bingo
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState({ username: "", message: "" });
  }

  render() {
    return (
      <div>
        <form className="user-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <input
            type="text"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="A message"
          />
          <button>SUBMIT</button>
        </form>
      </div>
    );
  }
}
