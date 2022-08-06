import { Component } from "react";
import CoinFlipperStats from "../CoinFlipperStats/CoinFlipperStats";

import "./CoinFlipper.css";

class CoinFlipper extends Component{
    static defaultProps = {
        coinSides: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/2017-D_Roosevelt_dime_obverse_transparent.png/1200px-2017-D_Roosevelt_dime_obverse_transparent.png", "https://upload.wikimedia.org/wikipedia/commons/5/5c/2005_Dime_Rev_Unc_P.png"],
        coinEleIds: ["heads", "tails"]
    };

    constructor(props){
        super(props);
        this.state = {
            coinSide: 0,
            headCount: 0,
            tailCount: 0,
            totalFlips: 0
        }
    }

    flipCoin(){
        const newCoinSide = Math.floor(Math.random() * 2);
        const isHeads = newCoinSide === 0 ? true : false;
        this.setState((currState) => {
            return {
                coinSide: newCoinSide,
                headCount: isHeads ? currState.headCount + 1 : currState.headCount,
                tailCount: !isHeads ? currState.tailCount + 1 : currState.tailCount,
                totalFlips: currState.totalFlips + 1
            }
        })
    }

    render(){
        return (
            <div>
                <section id = "coin-flip-wrap">
                    <h1>flip a coin</h1>
                    <div className = {`coin ${this.props.coinEleIds[this.state.coinSide]}`}>
                        <div className = "side-heads">
                            <img className = "coin-img" src={this.props.coinSides[0]} alt={`${this.props.coinEleIds[0]} side of a coin`}></img>
                        </div>
                        <div className = "side-tails">
                            <img className = "coin-img" src={this.props.coinSides[1]} alt={`${this.props.coinEleIds[1]} side of a coin`}></img>
                        </div>
                    </div>
                    <button id = "coin-flip-button" onClick = {() => this.flipCoin()}>FLIP</button>
                </section>
                <section id = "coin-flip-stats">
                    <CoinFlipperStats headCount = {this.state.headCount} tailCount = {this.state.tailCount} totalFlips = {this.state.totalFlips} />
                </section>
            </div>
        );
    }
}

export default CoinFlipper;