import { Component } from "react";

class Game extends Component {
    constructor(props){
        super(props);

        this.state = {
            gorbinoScore: 0,
            gameOver: false
        }
    }

    rollTheDice = () => {
        let randomNum = Math.floor((Math.random() * 10) + 1);
        console.log(randomNum);

        this.setState({"gorbinoScore": randomNum, "gameOver": (randomNum === 7 ? true: this.state.gameOver)});
    }

    render(){
        return (
          <div>
            <h1>You have a gorbino rating of: {this.state.gorbinoScore}.</h1>
            <h3>{this.state.gameOver ? "You've won!" : ""}</h3>
            <div>
              {!this.state.gameOver ? (
                <input type="button" value="Roll The Dice" onClick={this.rollTheDice}/>
              ) : (
                <></>
              )}
            </div>
          </div>
        );
    }
}

export default Game;
