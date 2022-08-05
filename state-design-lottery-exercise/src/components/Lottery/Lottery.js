import { Component } from 'react'
import LottoBall from '../LottoBall/LottoBall';
import './Lottery.css';

class Lottery extends Component {
  constructor(props){
    super(props);
    this.state = {
      lottoBalls: new Array(this.props.lottoBalls).fill(0)
    };
  }

  generateLottoBalls(){
    const max = this.props.maxBallNum;

    let newLottoBalls = this.state.lottoBalls.map((lottoBall) => {
      return Math.floor(Math.random() * (max + 1));
    });

    this.setState(
      {lottoBalls: newLottoBalls}
    );
  }

  render(){
    return (
      <div className = "lotto-game-wrap">
        <h1><b><u>{this.props.lottoName}</u></b></h1>
        <h3>Try your luck! Take a roll!</h3>
        <ul className = "lotto-ball-wrap">
          {
            this.state.lottoBalls.map((value) => {
              return <LottoBall value = {value} />
            })
          }
        </ul>
        <button className = "lotto-roll-button" onClick={() => this.generateLottoBalls()}>ROLL</button>
      </div>
    );
  }
}

export default Lottery;
