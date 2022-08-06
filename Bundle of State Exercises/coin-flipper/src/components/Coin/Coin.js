import { Component } from "react";
import "./Coin.css";

class Coin extends Component{
    render(){
        return (
          <div className={`coin ${(this.props.animator !== null) ? this.props.animator : ""}`}>
            <div className="side-heads">
              <img
                className="coin-img"
                src={this.props.coinInfo[0].imgSrc}
                alt={`${this.props.coinInfo[0].side} side of a coin`}
              ></img>
            </div>
            <div className="side-tails">
              <img
                className="coin-img"
                src={this.props.coinInfo[1].imgSrc}
                alt={`${this.props.coinInfo[1].side} side of a coin`}
              ></img>
            </div>
          </div>
        );
    }
}

export default Coin;