import { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import "./ColorBoxes.css";

import RandomGenerator from "../helper";

class ColorBoxes extends Component {
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
        ],
    };

    constructor(props) {
        super(props);
        this.state = {
            boxes: Array.from({ length: this.props.boxCount }).map((e) => {
                let randomColorIdx = RandomGenerator(this.props.colors.length);
                return { boxColor: this.props.colors[randomColorIdx] };
            }),
        };
    }

    getDistinctColorIdx(prevColor){
        let randomColorIdx;
        
        do{
            randomColorIdx = RandomGenerator(this.props.colors.length);
        }while(this.props.colors[randomColorIdx] === prevColor)

        return randomColorIdx;
    }

    changeBoxColor(boxIdx) {
        this.setState((prevState) => {
            let newBoxes = prevState.boxes.map((box, i) => {
                if (i === boxIdx) {

                    let randomColorIdx = this.getDistinctColorIdx(box.boxColor);

                    return {
                        boxColor: this.props.colors[randomColorIdx]
                    };
                }
                return box;
            });

            return {
                boxes: newBoxes,
            };
        });
    }

    render() {
        return (
            <>
                <ul id="box-wrap">
                    {this.state.boxes.map((box, idx) => {
                        return (
                            <ColorBox
                                color={box.boxColor}
                                boxIdx={idx}
                                clickHandler={this.changeBoxColor.bind(this)}
                            />
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default ColorBoxes;
