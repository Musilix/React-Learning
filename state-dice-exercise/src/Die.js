import { Component } from "react";
import './Die.css';
 
class Die extends Component{
    render(){
        return (
            <i id="die" style={{'--fa-animation-duration': '500ms'}} className={"fa-solid fa-dice-" + this.props.die + " fa-10x" + (this.props.rolling ? " fa-shake" : "")}></i>
        );
    }
}

export default Die;