import { Component } from "react";

// This is a whole bunch of bulky junk just to do a simple task.
// We can simplify this process by moving this logic to a hook, simplifying the logic
export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.count);
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{`The Counter Class says ${this.state.count}`}</h1>
        <button onClick={this.handleClick}>another</button>
      </div>
    );
  }
}
