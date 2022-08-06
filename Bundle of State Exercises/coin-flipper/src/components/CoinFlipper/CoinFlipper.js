import { Component } from "react";
import Coin from "../Coin/Coin";
import CoinFlipperStats from "../CoinFlipperStats/CoinFlipperStats";

import "./CoinFlipper.css";

class CoinFlipper extends Component {
  static defaultProps = {
    sides: [
      {
        side: "heads",
        imgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/2017-D_Roosevelt_dime_obverse_transparent.png/1200px-2017-D_Roosevelt_dime_obverse_transparent.png",
      },
      {
        side: "tails",
        imgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/5/5c/2005_Dime_Rev_Unc_P.png",
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      coinSide: null,
      headCount: 0,
      tailCount: 0,
      totalFlips: 0,
      flipping: false,
      coinAnimator: null,
    };
  }

  handleClick() {
    this.flipCoin();
  }

  // In order for the animation to work correctly, we can quickly set the coin animator class name to null before quickly switching it to the proper coin animator class name, depending on the coinSide state
  async nullifyAnimator() {
    this.setState({
      coinAnimator: null,
    });
  }

  updateAfterCoinAnim(isHeads) {
    // Time conditional state values... show what side we got after the animation is over, set flipping back to false after anim, and nullify the animator class name after animation is over.
    setTimeout(() => {
      this.setState((currState) => {
        return {
          headCount: isHeads ? currState.headCount + 1 : currState.headCount,
          tailCount: !isHeads ? currState.tailCount + 1 : currState.tailCount,
          flipping: false,
        };
      });
    }, 3000);
  }

  // Im jumping through so many loops holes to update the animator to null before filling in the state with proper coin details
  // I bet the hooks section will help provide a better solution, but this is what I gotta deal with for now
  async flipCoin() {
    const newCoinSide = Math.floor(Math.random() * 2);
    const isHeads = newCoinSide === 0 ? true : false;

    await this.nullifyAnimator();

    this.setState((currState) => {
      return {
        coinSide: newCoinSide,
        totalFlips: currState.totalFlips + 1,
        flipping: true,
        coinAnimator: `${this.props.sides[newCoinSide].side}-animator`,
      };
    });

    this.updateAfterCoinAnim(isHeads);
  }

  render() {
    return (
      <div>
        <section id="coin-flip-wrap">
          <h1>flip a coin</h1>
          <Coin
            animator={this.state.coinAnimator}
            coinInfo={this.props.sides}
          />
          <button
            id="coin-flip-button"
            onClick={() => this.handleClick()}
            disabled={this.state.flipping}
          >
            FLIP
          </button>
        </section>
        <section id="coin-flip-stats">
          <CoinFlipperStats
            headCount={this.state.headCount}
            tailCount={this.state.tailCount}
            totalFlips={this.state.totalFlips}
          />
        </section>
      </div>
    );
  }
}

export default CoinFlipper;
