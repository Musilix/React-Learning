class Slot extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.s1} {this.props.s2} {this.props.s3}</p>
                {bingo(this.props) ? <p>SCORE!!!</p> : null}
                <br/>
            </div>
        )
    }
}

function bingo(props){
    return(props.s1 === props.s2 && props.s2 === props.s3);
}

// const fruits = ["🍇", "🍈", "🍊", "🍌", "🍍", "🍒"];
// function getFruit(){
//     let fruitString = "";

//     for(let i = 0; i < 3; i++){
//         fruitString += fruits[Math.floor(Math.random() * (fruits.length - 1))];
//     }

//     return fruitString;
// }