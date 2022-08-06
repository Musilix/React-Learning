import { Component } from 'react';
import "./ColorBox.css";

class ColorBox extends Component{
    render(){
        return (
            <>
                <li onClick = {() => this.props.clickHandler(this.props.boxIdx)} style={{"backgroundColor": this.props.color}}></li>
            </>
        );
    }
}

export default ColorBox;