import { Component } from 'react'
import './LottoBall.css';

class LottoBall extends Component {
  render(){
    return (
      <li className = "lotto-ball">
        <p>{this.props.value}</p>
      </li>
    );
  }
}

export default LottoBall;
