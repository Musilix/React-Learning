import { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import "./ColorBoxes.css";

import RandomGenerator from "../helper";

class ColorBoxes extends Component{
    static defaultProps = {
        colors: [
            "#FFADAD",
            "#FFD6A5",
            "#FDFFB6",
            "#CAFFBF",
            "#9BF6FF",
            "#A0C4FF",
            "#BDB2FF",
            "#FFC6FF",
            "#A2D2FF",
            "#BDE0FE",
            "#FFAFCC",
            "#CDB4DB",
        ]
    }

    constructor(props){
        super(props);
        this.state = {
            boxes: Array.from({length: this.props.boxCount}).map((e) => {
                let randomColorIdx = RandomGenerator(this.props.colors.length);
                return { color: this.props.colors[randomColorIdx]}
            })
        }
    }

    changeBoxColor(boxIdx){
        console.log(boxIdx);
        this.setState((prevState) => {
            return {
                boxes: prevState.boxes.map((e, i) => {
                    if(i === boxIdx){
                        return {color: this.props.colors[RandomGenerator(this.props.colors.length)]}
                    }
                    return e;
                })
            }
        });
    }

    render(){
        return (
            <>
                <ul id = "box-wrap">
                    {this.state.boxes.map((box, idx) => {
                        return <ColorBox color = {box.color} boxIdx = {idx} clickHandler = {() => this.changeBoxColor(idx)} />
                    })}
                </ul>
            </>
        )
    }
}

export default ColorBoxes;