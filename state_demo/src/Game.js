import { Component } from "react";

class Game extends Component {
    constructor(props){
        super(props);

        this.state = {
            gorbinoScore: 0,
            gameOver: false
        }
    }

    render(){
        return (
            <div>
                <h1>You have a gorbino rating of: {this.state.gorbinoScore}</h1>
            </div>
        )
    }
}

export default Game;
