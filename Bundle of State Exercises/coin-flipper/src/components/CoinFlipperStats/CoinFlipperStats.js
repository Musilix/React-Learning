import { Component } from "react";

class CoinFlipperStats extends Component{
    render(){
        return (
            <div>
                <p>You've flipped the coin a total of {this.props.totalFlips} times, with {this.props.headCount} heads and {this.props.tailCount} tails!</p>
            </div>
        );
    }
}

export default CoinFlipperStats;