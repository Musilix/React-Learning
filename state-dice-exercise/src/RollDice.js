import { Component } from "react";
import Die from "./Die";
import './RollDice.css';

class RollDice extends Component{
    static defaultProps = {
		diceDict: ["one", "two", "three", "four", "five", "six"]
	}

    constructor(props){
        super(props);

        this.state = {
            diceRolling: false,
            dice: new Array(parseInt(this.props.diceAmt)).fill("one")
        }
    }

    rollDice = () => {
        this.setState({"diceRolling": true});
        setTimeout(() => {
            this.setState({"diceRolling": false});
        }, 500);

        let newDice = this.state.dice.map((e) => {
            let die = Math.floor(Math.random() * 6) + 1;
            return this.props.diceDict[die - 1];
        });

        this.setState({"dice": newDice});
    }

    render(){
        let diceElements = [];
        return (
          <div className="diceRoller">
            <section className="dice-layout">
            {
                this.state.dice.forEach((die) => {
                    diceElements.push(<Die die={die} rolling={this.state.diceRolling}></Die>);
                })
            }
            {diceElements}
            </section>
            <section className="dice-activator">
              <button id="dice-roller" onClick={this.rollDice} disabled={this.state.diceRolling}><span>{!this.state.diceRolling ? "Roll the Dice" : "Rolling..."}</span></button>
            </section>
          </div>
        );
    }
}

export default RollDice;